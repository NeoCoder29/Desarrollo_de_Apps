import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonLabel,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class RadioPage {

  opcionSeleccionada = 'angular';

}