import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonReorderGroup,
  IonReorder,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonReorderGroup,
    IonReorder,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class ReorderPage {

  elementos = [
    'Angular',
    'Ionic',
    'TypeScript',
    'HTML',
    'CSS'
  ];

  reordenar(event: any) {

    const elementoMovido = this.elementos.splice(event.detail.from, 1)[0];

    this.elementos.splice(event.detail.to, 0, elementoMovido);

    event.detail.complete();
  }

}