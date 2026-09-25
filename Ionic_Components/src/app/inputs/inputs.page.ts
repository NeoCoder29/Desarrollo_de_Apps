import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class InputsPage {

  nombre = '';
  correo = '';

}