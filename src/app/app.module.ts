import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/materials/material';
import { HomeComponent } from './components/site-components/home/home.component';
import { FinancialServicesComponent } from './components/site-components/financial-services/financial-services.component';
import { ClientEducationComponent } from './components/site-components/client-education/client-education.component';
import { FooterComponent } from './components/site-components/footer/footer.component';
import { SiteLayoutMainComponent } from './components/site-components/_layouts/site-layout-main/site-layout-main.component';
import { SiteLayoutAccountCreationComponent } from './components/site-components/_layouts/site-layout-account-creation/site-layout-account-creation.component';
import { HeaderComponent } from './components/site-components/header/header.component';
import { SoftwareDevelopmentComponent } from './components/site-components/software-development/software-development.component';
import { ConsultancyServicesComponent } from './components/site-components/consultancy-services/consultancy-services.component';
import { FeesAndCommissionComponent } from './components/site-components/fees-and-commission/fees-and-commission.component';
import { DedicatedTradingAccountsComponent } from './components/site-components/dedicated-trading-accounts/dedicated-trading-accounts.component';
import { BonusComponent } from './components/site-components/bonus/bonus.component';
import { PageNotFoundComponent } from './components/shared-components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/site-components/register/register.component';
import { ScrollUpComponent } from './components/shared-components/scroll-up/scroll-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialServicesComponent,
    ClientEducationComponent,
    FooterComponent,
    SiteLayoutMainComponent,
    SiteLayoutAccountCreationComponent,
    HeaderComponent,
    SoftwareDevelopmentComponent,
    ConsultancyServicesComponent,
    FeesAndCommissionComponent,
    DedicatedTradingAccountsComponent,
    BonusComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ScrollUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }