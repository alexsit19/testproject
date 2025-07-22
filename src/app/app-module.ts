import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Mycomponent } from './mycomponent/mycomponent';
import { Secondcomponent } from './secondcomponent/secondcomponent';
import { FormsModule } from '@angular/forms';
import { UserForm } from './user-form/user-form';
import { UserService } from './user-service';

import { 
  provideHttpClient,
  withFetch           //  ← импортируем
} from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    Mycomponent,
    Secondcomponent,
    UserForm
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
     provideHttpClient(
      withFetch()       // ← включаем Fetch API поддержку
    ),
    UserService

  ],
  bootstrap: [App]
})
export class AppModule { }
