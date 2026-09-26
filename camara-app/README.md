# Cámara App — Ionic + Angular + Capacitor

Proyecto de laboratorio: captura de fotos con la cámara nativa (o galería) usando
`@capacitor/camera`, Angular Standalone Components y Signals.

## Requisitos

- Node.js 18+ y npm
- Para compilar apps nativas: Android Studio (Android) y/o Xcode + CocoaPods (iOS, solo macOS)

## Instalación

```bash
npm install
```

> Ya viene todo configurado (Ionic, Capacitor, plugin de cámara, permisos nativos
> en `android/` e `ios/`). No es necesario correr `ionic start` de nuevo.

## Ejecutar en el navegador

```bash
npm start
```

Abre `http://localhost:4200`. Al presionar el botón de cámara aparecerá el modal
de `@ionic/pwa-elements` pidiendo acceso a tu webcam o para subir un archivo.

## Ejecutar en Android

```bash
npm run build
npx cap sync android
npx cap open android
```

Esto abre Android Studio. Conecta un dispositivo (con depuración USB) o inicia un
emulador, y corre la app desde ahí. Para live-reload durante desarrollo:

```bash
npx cap run android -l --external
```

## Ejecutar en iOS (requiere macOS + Xcode)

```bash
npm run build
npx cap sync ios
npx cap open ios
```

## Estructura relevante

```
src/app/
├── models/photo.model.ts       # Interfaz UserPhoto
├── services/photo.service.ts   # Lógica de cámara (permisos, captura, estado con Signals)
├── gallery/
│   ├── gallery.page.ts         # Página con toggle de calidad + toast de permisos
│   └── gallery.page.html
├── app.config.ts               # Providers de Ionic + Router
└── app.routes.ts               # Ruta '' -> /gallery (lazy load)
```

## Funcionalidad incluida

- Captura con `CameraSource.Prompt` (el usuario elige entre cámara o galería).
- Calidad adaptativa: toggle "Alta Definición" (95% / 1920px) vs "Ahorro de Datos" (60% / 800px).
- Manejo de permisos con `Camera.checkPermissions()` / `requestPermissions()`.
- Notificación con `ion-toast` cuando el permiso es denegado.
- Eliminación de fotos de la galería en memoria (estado reactivo con `signal`).
- Permisos nativos ya declarados en `AndroidManifest.xml` e `Info.plist`.

## Notas

- El `applicationId` / bundle id configurado es `com.example.camaraapp`. Cámbialo en
  `capacitor.config.ts` (y en los proyectos nativos) antes de publicar la app.
- Si agregas más plugins de Capacitor más adelante, recuerda correr `npx cap sync`.
