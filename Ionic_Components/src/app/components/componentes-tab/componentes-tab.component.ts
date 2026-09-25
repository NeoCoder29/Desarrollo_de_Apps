import { Component } from '@angular/core';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { list } from 'ionicons/icons';

@Component({
  selector: 'app-componentes-tab',
  templateUrl: './componentes-tab.component.html',
  styleUrls: ['./componentes-tab.component.scss'],
  imports: [
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ],
})
export class ComponentesTabComponent {
  constructor() {
    addIcons({
      list
    });
  }
}