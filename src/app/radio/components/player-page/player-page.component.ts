import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
declare var YT: any; // Add this line to declare the type of YT as any

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnChanges {
  @Input() youtubeId!: string;
  @Input() playPause!: boolean;
  @Output() playerState = new EventEmitter<number>();
  apiLoaded = false;
  player: any;

ngOnInit() {
  (window as any).onYouTubeIframeAPIReady = () => {
    if (this.youtubeId) {
      this.loadVideo(this.youtubeId);
    }
  };
  this.loadYouTubeAPI();
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes['youtubeId']?.currentValue)
    if(this.player && changes['youtubeId']) {
      if(changes['youtubeId'].currentValue !== changes['youtubeId'].previousValue) {
        this.player.destroy(); // Destroy the previous player instance
        console.log(`Destroy vid ${this.youtubeId}`)
      }
      this.loadVideo(this.youtubeId);
  }
  console.log(changes['playPause'])
  if (changes['playPause'] && changes['playPause'].currentValue !== changes['playPause'].previousValue){
    if (this.playPause){
      this.playVideo();
    } else {
      this.pauseVideo();
    }
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
  // console.log('player ready')
  console.log(this.player)
  // event.target.playVideo();
}

onPlayerStateChange(event: any) {
  console.log(event.data, YT.PlayerState)
  this.playerState.emit(event.data)
}

playVideo(): void {
  this.player.playVideo();
}

pauseVideo() {
  console.log("stopped")
  this.player.pauseVideo();
}

}
