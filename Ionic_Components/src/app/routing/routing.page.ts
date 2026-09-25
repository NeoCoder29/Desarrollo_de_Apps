import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

import { RouterLink } from '@angular/router';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.page.html',
  styleUrls: ['./routing.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterLink,
    ComponentesTabComponent
  ],
})
export class RoutingPage {}