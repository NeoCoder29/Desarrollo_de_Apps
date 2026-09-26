import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserPhoto } from '../models/photo.model';

export interface TakePhotoResult {
  success: boolean;
  reason?: 'permission_denied' | 'cancelled' | 'error';
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // Estado reactivo privado mediante Angular Signals
  private photosSignal = signal<UserPhoto[]>([]);

  // Exposición de solo lectura del estado para los componentes
  public readonly photos = this.photosSignal.asReadonly();

  /**
   * Captura una foto directamente con la cámara (sin selector de origen).
   * @param isHighDef Define si la imagen se procesa en alta calidad o ahorro de datos.
   */
  async takeNewPhoto(isHighDef: boolean = false): Promise<TakePhotoResult> {
    try {
      // La verificación explícita de permisos con checkPermissions()/requestPermissions()
      // solo aplica en plataformas nativas (Android/iOS). En el navegador, Camera.getPhoto()
      // dispara directamente el diálogo nativo del navegador para pedir acceso a la webcam.
      if (Capacitor.isNativePlatform()) {
        const checkStatus = await Camera.checkPermissions();
        if (checkStatus.camera !== 'granted' || checkStatus.photos !== 'granted') {
          const request = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
          if (request.camera !== 'granted' && request.photos !== 'granted') {
            console.warn('Permisos de cámara o galería no concedidos.');
            return { success: false, reason: 'permission_denied' };
          }
        }
      }

      // Parámetros dinámicos según el modo seleccionado
      const imageQuality = isHighDef ? 95 : 60;
      const targetWidth = isHighDef ? 1920 : 800;

      // Abre la cámara directamente, sin mostrar el selector de origen
      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: imageQuality,
        width: targetWidth,
        allowEditing: false
      });

      // Mapeo a nuestro modelo de dominio
      const newPhoto: UserPhoto = {
        filepath: `${Date.now()}.${capturedPhoto.format}`,
        webPath: capturedPhoto.webPath,
        format: capturedPhoto.format
      };

      // Actualización inmutable del estado
      this.photosSignal.update((photos) => [newPhoto, ...photos]);
      return { success: true };
    } catch (error: any) {
      // Control de cancelación del usuario
      if (error?.message?.includes('cancelled') || error?.message?.includes('User cancelled')) {
        console.log('El usuario canceló la captura de imagen.');
        return { success: false, reason: 'cancelled' };
      }
      // Permiso de webcam denegado en el navegador
      if (error?.name === 'NotAllowedError' || error?.message?.includes('Permission denied')) {
        return { success: false, reason: 'permission_denied' };
      }
      console.error('Error no controlado al usar la cámara:', error);
      return { success: false, reason: 'error', errorMessage: error?.message ?? String(error) };
    }
  }

  deletePhoto(index: number): void {
    this.photosSignal.update((photos) => photos.filter((_, i) => i !== index));
  }
}