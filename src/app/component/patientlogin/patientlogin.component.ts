import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { patient } from '../../../model/patient';

@Component({
  selector: 'app-patientlogin',
  standalone: false,
  templateUrl: './patientlogin.component.html',
  styleUrl: './patientlogin.component.css'
})
export class PatientloginComponent {

  constructor(private patientService:PatientService,private router:Router) {}

    patient = new patient();
    userId:any;



    loginPatient(){


      this.patientService.loginPatient(this.patient).subscribe(
        (response:any) => {
        console.log(response);

          if(response)  {
            this.userId=response.patientID;
            sessionStorage.setItem('patientId',this.userId);

           this.router.navigate(['/patientchoosing']);
          } else{
            alert("Invalid Patient ID or Password");
        
          }
        },
        (error:any) => {
          console.error('Error fetching doctor details:', error);
          alert("Invalid Patient ID or Password");
    
        }



    );

   }

  }




