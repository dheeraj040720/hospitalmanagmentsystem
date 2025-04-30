import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { patient } from '../../../model/patient';
import Swal from 'sweetalert2';

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



    loginPatient() {
      this.patientService.loginPatient(this.patient).subscribe(
        (response: any) => {
          if (response) {
            this.userId = response.patientID;
            sessionStorage.setItem('patientId', this.userId);
    
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome back!',
              confirmButtonText: 'Continue',
              confirmButtonColor: '#3085d6'
            }).then(() => {
              this.router.navigate(['/patientchoosing']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Invalid Patient ID or Password',
              confirmButtonText: 'Try Again',
              confirmButtonColor: '#d33'
            });
          }
        },
        (error: any) => {
          console.error('Error fetching patient details:', error);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid Patient ID or Password',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#d33'
          });
        }
      );
    }

  }




