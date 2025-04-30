import { Component } from '@angular/core';
import { doctor } from '../../../model/doctor';
import { DoctorService } from '../../services/doctor.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordetails',
  standalone: false,
  templateUrl: './doctordetails.component.html',
  styleUrl: './doctordetails.component.css'
})
export class DoctordetailsComponent {

  doctor= new doctor();


  constructor(private doctorService:DoctorService,private router:Router) { }




  registerDoctor() {
    console.log(this.doctor);
  
    this.doctorService.registerDoctor(this.doctor).subscribe(
      (response) => {
        console.log('Doctor registered successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'The doctor has been registered successfully.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        }).then(() => {
          this.router.navigate(['adminchoosingurl']);
        });
      },
      (error) => {
        console.error('Error registering doctor', error);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'There was an error while registering the doctor. Please try again.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#d33'
        });
      }
    );
  }

}
