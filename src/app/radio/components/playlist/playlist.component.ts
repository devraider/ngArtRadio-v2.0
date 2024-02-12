import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() songs!: Song[];
  @Input() currentSong$!: Observable<Song>;


  ngOnInit(): void {
  }
}
