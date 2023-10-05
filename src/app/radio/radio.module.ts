import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlayerCommandsComponent } from './components/player-commands/player-commands.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MainComponent,
    PlaylistComponent,
    PlayerCommandsComponent,
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {path: ":radioChannelName", component: MainComponent}
    ])
  ]
})
export class RadioModule { }
