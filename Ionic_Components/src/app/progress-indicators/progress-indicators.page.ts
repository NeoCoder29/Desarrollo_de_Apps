import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonProgressBar,
  IonSpinner
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.page.html',
  styleUrls: ['./progress-indicators.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonProgressBar,
    IonSpinner,
    ComponentesTabComponent
  ],
})
export class ProgressIndicatorsPage {}