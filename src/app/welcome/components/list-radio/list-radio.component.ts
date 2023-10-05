import { Component, OnInit } from '@angular/core';
import { Radio } from 'src/app/models/radio';
import { WelcomeService } from '../../services/welcome.service';

@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.component.html',
  styleUrls: ['./list-radio.component.scss']
})
export class ListRadioComponent implements OnInit {
  radioChannels$ = this._welcomeService.radioChannels$
  radioList: Radio[] = []

constructor(private _welcomeService: WelcomeService) {}

  ngOnInit(): void {
    this._welcomeService.getRadioChannels()
  }
}
