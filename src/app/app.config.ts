import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideStore } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { historyReducer } from './store/history.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { storageSyncMetaReducer } from 'ngrx-store-persist';

function localStorageSyncReducer(reducer: any) {
  console.log(reducer, 'reducer')
  return localStorageSync({ keys: ['searches'], rehydrate: true })(reducer);
}


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule,
    StoreModule.forRoot({search: localStorageSyncReducer(historyReducer)}),
    ), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
