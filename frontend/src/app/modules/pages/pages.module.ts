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
import { RequestsComponent } from './requests/requests.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { MobileconfigurationComponent } from './mobileconfiguration/mobileconfiguration.component';
import { InternetconfigurationComponent } from './internetconfiguration/internetconfiguration.component';
import { OfferingsconfigurationComponent } from './offeringsconfiguration/offeringsconfiguration.component';
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    MobiletariffComponent,
    InternetComponent,
    TariffComponent,
    MobilesubmitComponent,
    InternetsubmitComponent,
    RequestsComponent,
    AdminmenuComponent,
    MobileconfigurationComponent,
    InternetconfigurationComponent,
    OfferingsconfigurationComponent,
    UsersComponent,
    PaymenthistoryComponent,
    ValidationComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        BrowserModule,
        RouterModule,
        FormsModule,
    ],
  exports: [
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    MobiletariffComponent,
    InternetComponent,
    TariffComponent,
    MobilesubmitComponent,
    InternetsubmitComponent,
    RequestsComponent,
    PaymenthistoryComponent,
    ValidationComponent
  ]
})
export class PagesModule { }
