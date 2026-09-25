import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

import { ToastController } from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ComponentesTabComponent
  ],
})
export class ToastPage {

  constructor(private toastController: ToastController) {}

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: '¡Datos guardados correctamente!',
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();
  }
}