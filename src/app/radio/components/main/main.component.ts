import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Song } from 'src/app/models/song';
import { PlayerMainService } from 'src/app/services/player-main.service';
import { PlaylistStartComponent } from '../playlist-start/playlist-start.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {

  showYtVideo!: boolean;
  playPause = false;
  songsList$!: Observable<Song[]>;
  currentSong$!: Observable<Song>;

  constructor(private _route: ActivatedRoute, private _playerMainService: PlayerMainService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      map((paramsMap) => paramsMap.get('radioChannelName') as string),
      switchMap(async (radioChannelName) => this._playerMainService.getSongs(radioChannelName))
    ).subscribe();
    
    this.songsList$ = this._playerMainService.songsList$;
    this.currentSong$ = this._playerMainService.currentSong$;

    this.openStartPlaylistDialog();
  }

  handleShowYtVideo(event: boolean): void {
    this.showYtVideo = event;
  }

  handlePlayerState(event: number) {
    if(event === 2) {
      this.playPause = false;
    } else if (event === 1) {
      this.playPause = true;
    }
    
  }

  openStartPlaylistDialog() {
    const dialogRef = this.dialog.open(PlaylistStartComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if (!res) {

        }
        this.handleBackwordForwardSong();
      }
    )
  }

  handleBackwordForwardSong(event: number = 0) {
    this._playerMainService.handleBackwordForwardSong(event);
    this._playerMainService.handlePlayPause(true);
  }
}
