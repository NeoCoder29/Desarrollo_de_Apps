import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class RefresherPage {

  elementos = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3'
  ];

  actualizar(event: any) {

    setTimeout(() => {

      this.elementos.push(
        `Elemento ${this.elementos.length + 1}`
      );

      event.target.complete();

    }, 1000);

  }

}