import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { PatientregisterComponent } from './component/patientregister/patientregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctordetailsComponent } from './component/doctordetails/doctordetails.component';
import { AdminviewpatientComponent } from './component/adminviewpatient/adminviewpatient.component';
import { AdminviewdoctorComponent } from './component/adminviewdoctor/adminviewdoctor.component';
import { DoctorviewComponent } from './component/doctorview/doctorview.component';
import { DoctordiagnoseComponent } from './component/doctordiagnose/doctordiagnose.component';
import { CommonModule } from '@angular/common';
import { DoctorloginComponent } from './component/doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminchoosingpageComponent } from './component/adminchoosingpage/adminchoosingpage.component';
import { DoctoradmineditpageComponent } from './component/doctoradmineditpage/doctoradmineditpage.component';
import { PatientChoosingDoctorComponent } from './component/patient-choosing-doctor/patient-choosing-doctor.component';
import { PatientloginComponent } from './component/patientlogin/patientlogin.component';
import { PatientChoosingComponent } from './component/patient-choosing/patient-choosing.component';
import { PatientDetailsByIdComponent } from './component/patient-details-by-id/patient-details-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    PatientregisterComponent,
    DoctordetailsComponent,
    AdminviewpatientComponent,
    AdminviewdoctorComponent,
    DoctorviewComponent,
    DoctordiagnoseComponent,
    DoctorloginComponent,
    AdminloginComponent,
    AdminchoosingpageComponent,
    DoctoradmineditpageComponent,
    PatientChoosingDoctorComponent,
    PatientloginComponent,
    PatientChoosingComponent,
    PatientDetailsByIdComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
