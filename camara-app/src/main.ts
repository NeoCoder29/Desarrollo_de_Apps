import { bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Registro de Web Components de @ionic/pwa-elements para que la cámara
// funcione también cuando la app corre en un navegador de escritorio (ionic serve).
defineCustomElements(window);

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
