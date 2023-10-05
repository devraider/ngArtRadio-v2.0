import { ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {

  showYtVideo!: boolean;
  playPause = false;

  songs = [
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

  constructor(private _route: ActivatedRoute, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      map((paramsMap) => paramsMap.get('radioChannelName') as string),
      tap((radioChannelName) => {
        console.log(radioChannelName); // Log the radioChannelName
      })
    ).subscribe();
  }

  handleShowYtVideo(event: boolean): void {
    this.showYtVideo = event;
  }

  handlePlayerState(event: number) {
    console.log(`State now : ${event}`)
    if(event === 2) {
      this.playPause = false;
    } else if (event === 1) {
      this.playPause = true;
    }
    this.cdr.detectChanges(); // Manually trigger change detection

    console.log(`Now play pause is: ${this.playPause}`)
  }
}
