
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MedicineDetailsDialogComponent } from './medicine-details-dialog/medicine-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ApiKeyInterceptor } from './auth.interceptor'; 
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientFormComponent,
    CheckoutComponent,
    MedicineDetailsDialogComponent,
    PlaceOrderComponent,
    LoginComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-center', 
      preventDuplicates: true, 
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
