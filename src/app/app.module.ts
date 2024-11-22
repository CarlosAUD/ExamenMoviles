import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';  // Importación del archivo de entorno
import { initializeApp } from 'firebase/app';  // Firebase 9+
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth, indexedDBLocalPersistence, initializeAuth } from '@angular/fire/auth';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),  // Usa environment.firebaseConfig
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        const app = initializeApp(environment.firebaseConfig);
        const auth = initializeAuth(app, { persistence: indexedDBLocalPersistence });
        return auth;
      } else {
        return getAuth();
      }
    }),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
