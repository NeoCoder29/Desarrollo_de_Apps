import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    ComponentesTabComponent
  ],
})
export class ToolbarPage {

  constructor() {
    addIcons({
      settings
    });
  }

  abrirConfiguracion() {
    alert('Configuración seleccionada');
  }

}