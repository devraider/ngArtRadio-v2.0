import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, pipe, tap } from 'rxjs';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerMainService {
  #ROOT_API = environment.backendApi
  #SONGS_API = `${this.#ROOT_API}/radioSongs/search/findByRadioSlugAndActive?slug=`

  #songsList$ = new Subject<Song[]>();
  songsList$ = this.#songsList$.asObservable();

  #currentSong$ = new Subject<Song>();
  currentSong$ = this.#currentSong$.asObservable();

  #showYtIcon$ = new BehaviorSubject<boolean>(false);
  showYtIcon$ = this.#showYtIcon$.asObservable();
  #playPause$ = new BehaviorSubject<boolean>(false);
  playPause$ = this.#playPause$.asObservable();
  #playerState$ = new Subject<number>();
  playerState$ = this.#playerState$.asObservable();


  private songsList: Song[] = [];
  private currentSongIndex: number = 0;

  constructor(private _http: HttpClient) {
    this.songsList$.subscribe(songs => {
      this.songsList = songs;
      // Reset current song index whenever the songs list changes
      this.currentSongIndex = 0;
    });

   }

  handlePlayPause(playState: boolean): void {
    this.#playPause$.next(playState);
  }
  handlePlayerState(playState: number): void {
    this.#playerState$.next(playState);
  }

  getSongs(radioPathName: string): void {
    this._http.get<ReponseSong>(`${this.#SONGS_API}${radioPathName}&active=1&sort=dateStreamPlayed,desc`)
    // this._http.get<Song[]>(this.#SONGS_API)
    .pipe(tap(data => console.log(data)))
    .subscribe((data) => this.#songsList$.next(data._embedded.radioSongs));
  }

  handleBackwordForwardSong(action: number = 0): void {
    console.log(`Current ${this.currentSongIndex} ${action}`);
    if (action === 1 && this.currentSongIndex < this.songsList.length - 1) {
      // Move to next song
      this.currentSongIndex++;
      console.log(`Pe aici ${this.currentSongIndex}++;`);
    } else if (action === -1 && this.currentSongIndex > 0) {
      // Move to previous song
      this.currentSongIndex--;
      console.log(`Pe aici ${this.currentSongIndex};`);
      
    }
    console.log(`Dupa calculce ${this.currentSongIndex} ${action}`);


    // Emit the new current song
    this.#currentSong$.next(this.songsList[this.currentSongIndex]);
  }
  
 }

 interface ReponseSong {
    _embedded: {
      radioSongs: Song[]
    }
 }