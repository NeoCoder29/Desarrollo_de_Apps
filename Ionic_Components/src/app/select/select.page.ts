import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class SelectPage {

  tecnologia = 'ionic';

}