import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class InfiniteScrollPage {

  elementos = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5'
  ];

  cargarMas(event: any) {
    setTimeout(() => {

      const siguienteNumero = this.elementos.length + 1;

      for (let i = 0; i < 5; i++) {
        this.elementos.push(`Elemento ${siguienteNumero + i}`);
      }

      event.target.complete();

    }, 1000);
  }
}