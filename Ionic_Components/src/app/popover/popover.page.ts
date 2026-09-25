import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  PopoverController
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    ComponentesTabComponent
  ],
})
export class PopoverPage {

  constructor(private popoverController: PopoverController) {}

  async mostrarPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverContenidoComponent,
      event: event
    });

    await popover.present();
  }

}

@Component({
  selector: 'app-popover-contenido',
  template: `
    <ion-content class="ion-padding">
      <h3>Popover</h3>
      <p>Este contenido aparece en una ventana emergente.</p>
    </ion-content>
  `,
  imports: [
    IonContent
  ],
})
export class PopoverContenidoComponent {}