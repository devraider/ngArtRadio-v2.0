import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Radio } from 'src/app/models/radio';

@Component({
  selector: 'app-card-radio',
  templateUrl: './card-radio.component.html',
  styleUrls: ['./card-radio.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CardRadioComponent implements OnInit {
  @Input() radio!: Radio;


  ngOnInit(): void{
    console.log(this.radio)
  }
}
