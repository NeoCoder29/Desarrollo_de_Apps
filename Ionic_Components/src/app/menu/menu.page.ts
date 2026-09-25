import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonMenuButton,
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class MenuPage {}