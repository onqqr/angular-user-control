import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDfroabbEiXT8NQ3db1MfoyI-TLYc5cKa0',
  authDomain: 'angularqo.firebaseapp.com',
  projectId: 'angularqo',
  storageBucket: 'angularqo.appspot.com',
  messagingSenderId: '1082151584136',
  appId: '1:1082151584136:web:a3903ed428181614cd7a3d',
  measurementId: 'G-2P4D9QYJXS',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnimationsAsync(),
  ],
};
