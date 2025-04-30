import { Component } from '@angular/core';
import { doctor } from '../../../model/doctor';
import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctorlogin',
  standalone: false,
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent {

  doctor= new doctor();
  userId:any;
  doctor1=new doctor();

  constructor( private doctorService:DoctorService,private router: Router)  { }



  loginDoctor() {
    this.doctorService.loginDoctor(this.doctor).subscribe(
      (response: any) => {
        if (response) {
          this.userId = response.doctorID;
          sessionStorage.setItem('doctorId', this.userId);
  
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back, Doctor!',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#3085d6'
          }).then(() => {
            this.router.navigate(['/doctorviewurl']);
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid Doctor ID or Password',
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#d33'
          });
        }
      },
      (error: any) => {
        console.error('Error fetching doctor details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid Doctor ID or Password',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#d33'
        });
      }
    );
  }

}



