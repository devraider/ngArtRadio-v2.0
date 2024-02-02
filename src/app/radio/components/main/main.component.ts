import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Song } from 'src/app/models/song';
import { PlayerMainService } from 'src/app/services/player-main.service';

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
  songs = [
    {
      "id": 2,
      "songSinger": "Doja Cat",
      "songName": "Paint The Town Red",
      "songLikes": 0,
      "songDislikes": 0,
      "youtubeId": "m4_9TFeMfJE",
      "dateRadioPlayed": "17-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 2,
      "songSinger": "Edward Sanda X Theo Rose",
      "songName": "Stii unde ma gasesti",
      "songLikes": 0,
      "songDislikes": 0,
      "youtubeId": "9APbLzu5ZRQ",
      "dateRadioPlayed": "17-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "NANE",
      "songName": "COCKTAIL",
      "songLikes": 1,
      "songDislikes": 0,
      "youtubeId": "6d8LU2Mu_Y4",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    },
    {
      "id": 3,
      "songSinger": "KILLA FONIC",
      "songName": "Miami Bici",
      "songLikes": 0,
      "songDislikes": 1,
      "youtubeId": "7XQ0t89ibJw",
      "dateRadioPlayed": "16-09-2023 15:12:33",
      "radioChannel": "KissFM",
    }
  ]

  constructor(private _route: ActivatedRoute, private _playerMainService: PlayerMainService) {

  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      map((paramsMap) => paramsMap.get('radioChannelName') as string),
      switchMap(async (radioChannelName) => this._playerMainService.getSongs(radioChannelName))
    ).subscribe();

    this.songsList$ = this._playerMainService.songsList$
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
}
