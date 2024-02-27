import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtRadioUI-v2.0';


  ngOnInit(): void {
    `
    let song = document.querySelector("#main > div.container > div > div.span10 > div.box2 > div.row > div.span3 > div.songTitles.song-list-cont > div.slimScrollDiv > div._songs.slimScrollDivSongList > div > div.kv1_pad.kpad3.thumbnail.songCont")
    console.log(song.getAttribute("data-youtube"), " -> ", song.querySelector("div.txt1").textContent)
    `
  }

}
