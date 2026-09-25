import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonText,
    NgIf,
    ComponentesTabComponent
  ],
})
export class ButtonPage {

  mensaje = '';

  mostrarMensaje() {
    this.mensaje = '¡Botón presionado correctamente!';
  }
}