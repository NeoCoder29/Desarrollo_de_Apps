import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonToggle,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class TogglePage {

  notificaciones = true;

}