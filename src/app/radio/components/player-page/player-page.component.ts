import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, distinctUntilChanged, take } from 'rxjs';
import { PlayerMainService } from 'src/app/services/player-main.service';
declare var YT: any; // Add this line to declare the type of YT as any

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnChanges {
  @Input() youtubeId!: string;
  playPause$!: Observable<boolean>;
  apiLoaded = false;
  player: any;

constructor(private _playerMainService: PlayerMainService) {
}

ngOnInit() {
  this.playPause$ = this._playerMainService.playPause$;
  (window as any).onYouTubeIframeAPIReady = () => {
    if (this.youtubeId) {
      this.loadVideo(this.youtubeId);
    }
  };
  this.loadYouTubeAPI();
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

  }
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
