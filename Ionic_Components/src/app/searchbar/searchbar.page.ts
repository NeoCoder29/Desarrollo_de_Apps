import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class SearchbarPage {

  elementos = [
    'Angular',
    'Ionic',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS'
  ];

  elementosFiltrados = [...this.elementos];

  buscar(event: any) {

    const texto = event.detail.value?.toLowerCase() || '';

    this.elementosFiltrados = this.elementos.filter(elemento =>
      elemento.toLowerCase().includes(texto)
    );

  }

}