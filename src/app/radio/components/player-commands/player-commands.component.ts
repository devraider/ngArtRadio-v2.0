import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-player-commands',
  templateUrl: './player-commands.component.html',
  styleUrls: ['./player-commands.component.scss']
})
export class PlayerCommandsComponent implements OnChanges {
  @Input() song!: Song;
  @Input() playPause!: boolean;
  @Output() showYtVideo = new EventEmitter<boolean>();
  showYtVideoIcon = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Commands get play pause: ${changes['playPause'].currentValue}`)
  }
  showHideYtVideo():void {
    this.showYtVideoIcon = !this.showYtVideoIcon;
    this.showYtVideo.emit(this.showYtVideoIcon);
  }
}
