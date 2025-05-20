import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Nora from '@primeng/themes/nora';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Nora,
        options: {
          darkModeSelector: '.my-app-dark',
          theme: {
            // Matcha-inspired colors
            'primary-color': '#7BA05B',           // Earthy Green
            'primary-color-text': '#ffffff',
            'accent-color': '#A3C644',            // Matcha highlight
            'highlight-bg': '#F3F8EE',            // Light creamy background
            'surface-ground': '#F5F5F0',          // General background
            'surface-card': '#ffffff',
            'text-color': '#3E4B32',
            'text-color-secondary': '#6B7A5B',
            'border-color': '#DDE5D0'
          }
        }
      }
    })
  ]
};
