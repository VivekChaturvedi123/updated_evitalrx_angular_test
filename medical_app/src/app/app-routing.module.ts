import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patientForm', component: PatientFormComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'patient-details', component: PatientDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
