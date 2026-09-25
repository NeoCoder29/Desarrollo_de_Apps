import { Component } from '@angular/core';
import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    ComponentesTabComponent
  ],
})
export class AccordionPage {

}