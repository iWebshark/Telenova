import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { MobiletariffComponent } from './mobiletariff/mobiletariff.component';
import { InternetComponent } from './internet/internet.component';
import { TariffComponent } from './tariff/tariff.component';
import { MobilesubmitComponent } from './mobilesubmit/mobilesubmit.component';
import { InternetsubmitComponent } from './internetsubmit/internetsubmit.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    MobiletariffComponent,
    InternetComponent,
    TariffComponent,
    MobilesubmitComponent,
    InternetsubmitComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    MobiletariffComponent,
    InternetComponent,
    TariffComponent,
    MobilesubmitComponent,
    InternetsubmitComponent
  ]
})
export class PagesModule { }
