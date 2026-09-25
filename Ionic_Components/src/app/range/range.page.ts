import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRange,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRange,
    IonItem,
    IonLabel,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class RangePage {

  volumen = 50;

}