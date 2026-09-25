import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ComponentesTabComponent
  ],
})
export class AlertPage {

  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Esta es una alerta creada con Ionic.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}