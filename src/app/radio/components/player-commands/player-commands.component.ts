import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, distinctUntilChanged, take, tap } from 'rxjs';
import { Song } from 'src/app/models/song';
import { PlayerMainService } from 'src/app/services/player-main.service';

@Component({
  selector: 'app-player-commands',
  templateUrl: './player-commands.component.html',
  styleUrls: ['./player-commands.component.scss']
})
export class PlayerCommandsComponent implements OnInit {
  @Input() song!: Song;
  @Input() playPause!: boolean;
  @Output() backwordForwardSong = new EventEmitter<number>();
  @Output() showYtVideo = new EventEmitter<boolean>();
  playPause$!: Observable<boolean>;
  showYtVideoIcon = false;


  constructor(private _playerMainService: PlayerMainService) {}
  ngOnInit(): void {
    this.playPause$ = this._playerMainService.playPause$
  }

  showHideYtVideo():void {
    this.showYtVideoIcon = !this.showYtVideoIcon;
    this.showYtVideo.emit(this.showYtVideoIcon);
  }

  handlePlayPause(){
    this.playPause$.pipe(
      distinctUntilChanged(),
      take(1)
    )
    .subscribe(playerState => {
      console.log(!playerState);
      this._playerMainService.handlePlayPause(!playerState);
    });
    
  }


  handleBackwordForwardSong(action: number) {
    this.backwordForwardSong.emit(action);
  }
}
