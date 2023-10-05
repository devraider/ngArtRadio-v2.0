import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Radio } from 'src/app/models/radio';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  #radioChannels$ = new Subject<Radio[]>();
  radioChannels$ = this.#radioChannels$.asObservable();
  
  
  #ROOT_API = environment.backendApi
  #RADIO_API = `${this.#ROOT_API}/radio.json`
  constructor(private _http: HttpClient) { }

  getRadioChannels(): void {
    this._http
    .get<Radio[]>(this.#RADIO_API)
    .subscribe((data) => this.#radioChannels$.next(data));
  }
}
