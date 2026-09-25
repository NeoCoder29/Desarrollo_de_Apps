import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { person, mail, call } from 'ionicons/icons';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonIcon,
    ComponentesTabComponent
  ],
})
export class ItemPage {

  constructor() {
    addIcons({
      person,
      mail,
      call
    });
  }

}