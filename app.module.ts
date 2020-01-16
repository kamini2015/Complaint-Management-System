import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { SessionService } from './session.service';
import { AuthGuard } from './AuthGuard';
import { AuthGuardLog } from './AuthGuardLog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddServiceComponent } from './Service-Engineer/add-service/add-service.component';

import { AddComplaintsComponent } from './complaints/add-complaints/add-complaints.component';
import { ComplaintsListComponent } from './complaints/complaints-list/complaints-list.component';
import { ComplaintsDetailComponent } from './complaints/complaints-detail/complaints-detail.component';

import { AddDealerComponent } from './Dealers/add-dealer/add-dealer.component';
import { DealerListComponent } from './Dealers/dealer-list/dealer-list.component';
import { DealerDetailComponent } from './Dealers/dealer-detail/dealer-detail.component';
import { DealerTabsComponent } from './tabs/dealer-tabs/dealer-tabs.component';
import { CustomerListComponent } from './Dealers/customer-list/customer-list.component';
import { ComplaintListComponent } from './Dealers/complaint-list/complaint-list.component';
import { AddBranchesComponent } from './Branches/add-branches/add-branches.component';
import { BranchesListComponent } from './Branches/branches-list/branches-list.component';
import { BrancheDetailComponent } from './Branches/branche-detail/branche-detail.component';
import { BranchesTabsComponent } from './tabs/branches-tabs/branches-tabs.component';
import { BrancheDealerListComponent } from './Branches/branche-dealer-list/branche-dealer-list.component';
import { BrancheComplaintsListComponent } from './Branches/branche-complaints-list/branche-complaints-list.component';
import { BrancheComplaintsDetailComponent } from './Branches/branche-complaints-detail/branche-complaints-detail.component';
import { BrancheSparepartListComponent } from './Branches/branche-sparepart-list/branche-sparepart-list.component';
import { SystemUserListComponent } from './System-User/system-user-list/system-user-list.component';
import { SystemUserDetailComponent } from './System-User/system-user-detail/system-user-detail.component';
import { SystemUserComplaintListComponent } from './System-User/system-user-complaint-list/system-user-complaint-list.component';
import { SystemUserTabsComponent } from './tabs/system-user-tabs/system-user-tabs.component';
import { SystemUserAddComponent } from './System-User/system-user-add/system-user-add.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuardLog]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},

  { path: 'add-service', component: AddServiceComponent, canActivate: [AuthGuard]},
  { path: 'add-complaints', component: AddComplaintsComponent, canActivate: [AuthGuard]},
  { path: 'complaints-list', component: ComplaintsListComponent, canActivate: [AuthGuard]},
  { path: 'complaints-detail', component: ComplaintsDetailComponent, canActivate: [AuthGuard]},
  { path: 'add-dealer', component: AddDealerComponent, canActivate: [AuthGuard]},
  { path: 'dealer-list', component: DealerListComponent, canActivate: [AuthGuard]},
  { path: 'dealer-detail', component: DealerDetailComponent, canActivate: [AuthGuard]},
  { path: 'customer-list', component: CustomerListComponent, canActivate: [AuthGuard]},
  { path: 'complaint-list', component: ComplaintListComponent, canActivate: [AuthGuard]},
  { path: 'add-branches', component: AddBranchesComponent, canActivate: [AuthGuard]},
  { path: 'branches-list', component: BranchesListComponent, canActivate: [AuthGuard]},
  { path: 'branche-detail', component: BrancheDetailComponent, canActivate: [AuthGuard]},
  { path: 'branche-dealer-list', component: BrancheDealerListComponent, canActivate: [AuthGuard]},
  { path: 'branche-complaints-list', component: BrancheComplaintsListComponent, canActivate: [AuthGuard]},
  { path: 'branche-complaints-detail', component: BrancheComplaintsDetailComponent, canActivate: [AuthGuard]},
  { path: 'branche-sparepart-list', component: BrancheSparepartListComponent, canActivate: [AuthGuard]},
  { path: 'system-user-list', component: SystemUserListComponent , canActivate: [AuthGuard]},
  { path: 'system-user-detail', component: SystemUserDetailComponent, canActivate: [AuthGuard] },
  { path: 'system-user-complaint-list', component: SystemUserComplaintListComponent , canActivate: [AuthGuard]},
  { path: 'system-user-add', component: SystemUserAddComponent , canActivate: [AuthGuard]},
];


@NgModule({
  declarations:   [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AddServiceComponent,
    AddComplaintsComponent,
    ComplaintsListComponent,
    ComplaintsDetailComponent,
    AddDealerComponent,
    DealerListComponent,
    DealerDetailComponent,
    DealerTabsComponent,
    CustomerListComponent,
    ComplaintListComponent,
    AddBranchesComponent,
    BranchesListComponent,
    BrancheDetailComponent,
    BranchesTabsComponent,
    BrancheDealerListComponent,
    BrancheComplaintsListComponent,
    BrancheComplaintsDetailComponent,
    BrancheSparepartListComponent,
    SystemUserListComponent,
    SystemUserDetailComponent,
    SystemUserComplaintListComponent,
    SystemUserTabsComponent,
    SystemUserAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatabaseService,
    SessionService,
    AuthGuard,
    AuthGuardLog
  ],
  bootstrap: [AppComponent],

})
export class AppModule { 
 


}
