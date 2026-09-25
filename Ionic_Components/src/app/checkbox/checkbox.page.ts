import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCheckbox,
    IonItem,
    IonLabel,
    FormsModule,
    ComponentesTabComponent
  ],
})
export class CheckboxPage {

  tareaCompletada = false;

}