import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.page.html',
  styleUrls: ['./typography.page.scss'],
  imports: [
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    ComponentesTabComponent
  ],
})
export class TypographyPage {}