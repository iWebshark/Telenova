import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesModule} from "./modules/pages/pages.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {StorageService} from "./services/storage/storage.service";
import {OfferingService} from "./services/offering.service";
import {SpecificationService} from "./services/specification.service";
import {PhoneNumberService} from "./services/phonenumber.service";
import {ProfileService} from "./services/profile.service";
import {ServService} from "./services/serv.service";
import {AuthService} from "./services/security/auth.service";
import {AuthInterceptorService} from "./services/security/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
    OfferingService,
    SpecificationService,
    PhoneNumberService,
    ProfileService,
    ServService,
    AuthService,
    AuthInterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
