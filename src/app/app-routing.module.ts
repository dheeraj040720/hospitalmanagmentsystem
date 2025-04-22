import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { PatientregisterComponent } from './component/patientregister/patientregister.component';
import { DoctordetailsComponent } from './component/doctordetails/doctordetails.component';
import { AdminviewpatientComponent } from './component/adminviewpatient/adminviewpatient.component';
import { AdminviewdoctorComponent } from './component/adminviewdoctor/adminviewdoctor.component';
import { DoctordiagnoseComponent } from './component/doctordiagnose/doctordiagnose.component';
import { DoctorviewComponent } from './component/doctorview/doctorview.component';
import { DoctorloginComponent } from './component/doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminchoosingpageComponent } from './component/adminchoosingpage/adminchoosingpage.component';

const routes: Routes = [{path:"",component:WelcomeComponent},
                        {path:"loginurl",component:LoginComponent},
                        {path:"registerurl",component:PatientregisterComponent},
                        {path:"doctordetailsurl",component:DoctordetailsComponent},
                        {path:"viewpatienturl",component:AdminviewpatientComponent},
                        {path:"adminviewdoctorurl",component:AdminviewdoctorComponent},
                        {path:"doctorviewurl",component:DoctorviewComponent},
                        {path:"diagnoisepatient/:patientId",component:DoctordiagnoseComponent},
                        {path:"doctorlogin",component:DoctorloginComponent},
                        {path:"adminLogin",component:AdminloginComponent},
                        {path:"adminchoosingurl",component:AdminchoosingpageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
