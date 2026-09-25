import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.page.html',
  styleUrls: ['./floating-action-button.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    ComponentesTabComponent
  ],
})
export class FloatingActionButtonPage {

  constructor() {
    addIcons({
      add
    });
  }

  agregar() {
    alert('Elemento agregado correctamente');
  }
}