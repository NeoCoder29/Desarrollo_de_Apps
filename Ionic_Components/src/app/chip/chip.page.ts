import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonChip,
  IonLabel,
  IonIcon
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonChip,
    IonLabel,
    IonIcon,
    ComponentesTabComponent
  ],
})
export class ChipPage {}