import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, distinctUntilChanged, take } from 'rxjs';
import { PlayerMainService } from 'src/app/services/player-main.service';
declare var YT: any; // Add this line to declare the type of YT as any

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnChanges, OnDestroy {
  @Input() youtubeId!: string;
  playPause$!: Observable<boolean>;
  apiLoaded = false;
  player: any;

constructor(private _playerMainService: PlayerMainService) {
}
  ngOnDestroy(): void {
    this.player.destroy;
  }

ngOnInit() {
  this.playPause$ = this._playerMainService.playPause$;
  if ((window as any)['YT'] && YT.Player) {
    if (this.youtubeId) {
      this.loadVideo(this.youtubeId);
    }
  } else {
      this.loadYouTubeAPI();
      (window as any).onYouTubeIframeAPIReady = () => {
      if (this.youtubeId) {
        this.loadVideo(this.youtubeId);
      }
    };
  }

}

ngOnChanges(changes: SimpleChanges): void {
    if(this.player && changes['youtubeId']) {
      if(changes['youtubeId'].currentValue !== changes['youtubeId'].previousValue) {
        this.player.destroy(); // Destroy the previous player instance
      }
      this.loadVideo(this.youtubeId);
  }
}

loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.id = "youtubeApiScript"
  tag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(tag);
  
}

loadVideo(vidID: string) {
  this.player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: vidID,
    events: {
      'onReady': this.onPlayerReady.bind(this),
      'onStateChange': this.onPlayerStateChange.bind(this)
    }
  });
}

onPlayerReady(event: any) {
  let playerState =  event.target.getPlayerState();
  this.playPause$.pipe(
    distinctUntilChanged(),
  ).subscribe((play: boolean) => {
    if (this.player) {
        if (playerState !== YT.PlayerState.PLAYING && !play){
          this.pauseVideo();
        } else if (playerState !== YT.PlayerState.PLAYING && play) {
          this.playVideo();
        } 
    }
  });
}

onPlayerStateChange(event: any) {
  console.log(YT.PlayerState, event.data);
  this._playerMainService.handlePlayerState(event.data);
  if (event.data === YT.PlayerState.PLAYING) {
    this.playVideo();

  } else if (event.data === YT.PlayerState.PAUSED) {
    this.pauseVideo();

  } else if (event.data === YT.PlayerState.ENDED) {
    console.log(`${event.data} === ${YT.PlayerState.ENDED}`);
    this.handleForward();
  }
}
  handleForward() {
    this._playerMainService.handleBackwordForwardSong(1);
  }

playVideo(): void {
  this.player.playVideo();
  this._playerMainService.handlePlayPause(true);
}

pauseVideo() {
  this.player.pauseVideo();
  this._playerMainService.handlePlayPause(false);
}

}
