import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-date-time-pickers',
  templateUrl: './date-time-pickers.page.html',
  styleUrls: ['./date-time-pickers.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonDatetime,
    ComponentesTabComponent
  ],
})
export class DateTimePickersPage {}