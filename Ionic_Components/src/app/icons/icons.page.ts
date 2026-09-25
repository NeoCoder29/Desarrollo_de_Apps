import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { home, heart, star } from 'ionicons/icons';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.page.html',
  styleUrls: ['./icons.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class IconsPage {

  constructor() {
    addIcons({
      home,
      heart,
      star
    });
  }

}