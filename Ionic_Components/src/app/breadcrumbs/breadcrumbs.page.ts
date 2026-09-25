import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBreadcrumb,
  IonBreadcrumbs
} from '@ionic/angular';

import { ComponentesTabComponent } from '../components/componentes-tab/componentes-tab.component';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBreadcrumb,
    IonBreadcrumbs,
    ComponentesTabComponent
  ],
})
export class BreadcrumbsPage {}