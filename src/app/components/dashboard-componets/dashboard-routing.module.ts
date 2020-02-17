import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from '../_layouts/dashboard-layout/dashboard-layout.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardAccountsComponent } from './dashboard-accounts/dashboard-accounts.component';
import { DashboardAccountDetailComponent } from './dashboard-account-detail/dashboard-account-detail.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardUtilityComponent } from './dashboard-utility/dashboard-utility.component';
import { DashboardChangePasswordComponent } from './dashboard-change-password/dashboard-change-password.component';
import { DashboardBankDetailsComponent } from './dashboard-bank-details/dashboard-bank-details.component';
import { DashboardAllUtilityComponent } from './dashboard-all-utility/dashboard-all-utility.component';

const routes: Routes = [
 {path: '', component: DashboardLayoutComponent, children: 
 [
  {path: '', component: DashboardHomeComponent},
  {path: 'home', component: DashboardHomeComponent},
  {path: 'users', component: DashboardUsersComponent},
  {path: 'accounts', component: DashboardAccountsComponent},
  {path: 'accounts/:account-munber', component:   DashboardAccountDetailComponent},
  {path: 'settings', component:  DashboardSettingsComponent, children: [
    { path: '', component:  DashboardProfileComponent},
    { path: 'profile', component:  DashboardProfileComponent},
    { path: 'change-password', component:  DashboardChangePasswordComponent},
    { path: 'bank-details', component:  DashboardBankDetailsComponent},
    { path: 'utility', component:  DashboardUtilityComponent, children:[
      { path: ':utility', component:  DashboardAllUtilityComponent},
      
    ]},
    
 ]},
 
  
  
 ] 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }