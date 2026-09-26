import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCard,
  IonButton,
  IonItem,
  IonLabel,
  IonToggle,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, trashOutline, sparkles, flashOffOutline, checkmarkCircle, closeCircle, alertCircle } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCard,
    IonButton,
    IonItem,
    IonLabel,
    IonToggle
  ],
  templateUrl: './gallery.page.html'
})
export class GalleryPage {
  public photoService = inject(PhotoService);
  private toastController = inject(ToastController);

  // Señal local para el estado del interruptor de calidad
  public isHighDef = signal<boolean>(false);

  constructor() {
    addIcons({ camera, trashOutline, sparkles, flashOffOutline, checkmarkCircle, closeCircle, alertCircle });
  }

  toggleQuality(enabled: boolean): void {
    this.isHighDef.set(enabled);
  }

  async takePhoto(): Promise<void> {
    const result = await this.photoService.takeNewPhoto(this.isHighDef());

    if (result.success) {
      await this.showToast('Foto guardada correctamente.', 'success', 'checkmark-circle');
      return;
    }

    if (result.reason === 'cancelled') {
      await this.showToast('Captura cancelada.', 'medium', 'close-circle');
      return;
    }

    if (result.reason === 'permission_denied') {
      await this.showToast(
        'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
        'danger',
        'alert-circle'
      );
    } else {
      await this.showToast(
        `No se pudo abrir la cámara. ${result.errorMessage ?? 'Revisa la consola para más detalles.'}`,
        'danger',
        'alert-circle'
      );
    }
  }

  private async showToast(
    message: string,
    color: 'success' | 'danger' | 'medium',
    icon: string
  ): Promise<void> {
    const toast = await this.toastController.create({
      message,
      icon,
      duration: 2500,
      position: 'bottom',
      color,
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}