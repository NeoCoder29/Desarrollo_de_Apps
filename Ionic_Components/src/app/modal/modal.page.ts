import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  ModalController
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ComponentesTabComponent
  ],
})
export class ModalPage {

  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalContenidoComponent
    });

    await modal.present();
  }
}

@Component({
  selector: 'app-modal-contenido',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Ventana Modal</h2>

      <p>
        Este contenido se muestra dentro de una ventana modal.
      </p>

      <ion-button expand="block" (click)="cerrar()">
        Cerrar
      </ion-button>
    </ion-content>
  `,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ],
})
export class ModalContenidoComponent {

  constructor(private modalController: ModalController) {}

  cerrar() {
    this.modalController.dismiss();
  }
}