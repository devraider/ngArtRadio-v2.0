import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRadioComponent } from './components/list-radio/list-radio.component';
import { CardRadioComponent } from './components/card-radio/card-radio.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListRadioComponent,
    CardRadioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListRadioComponent
      }
    ])
  ]
})
export class WelcomeModule { }
