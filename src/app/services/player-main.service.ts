import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Song } from '../models/song';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerMainService {
  #ROOT_API = environment.backendApi
  #SONGS_API = `${this.#ROOT_API}/kissfm.json`

  #songsList$ = new Subject<Song[]>();
  songsList$ = this.#songsList$.asObservable();

  #showYtIcon$ = new BehaviorSubject<boolean>(false);
  showYtIcon$ = this.#showYtIcon$.asObservable();
  #playPause$ = new BehaviorSubject<boolean>(false);
  playPause$ = this.#playPause$.asObservable();
  #playerState$ = new Subject<number>();
  playerState$ = this.#playerState$.asObservable();

  constructor(private _http: HttpClient) { }

  handlePlayPause(playState: boolean): void {
    this.#playPause$.next(playState);
  }
  handlePlayerState(playState: number): void {
    this.#playerState$.next(playState);
  }

  getSongs(radioPathName: string): void {
    // this._http.get<Song[]>(`${this.#SONGS_API}/${radioPathName}`)
    this._http.get<Song[]>(this.#SONGS_API)
    .subscribe((data) => this.#songsList$.next(data));
  }
 }