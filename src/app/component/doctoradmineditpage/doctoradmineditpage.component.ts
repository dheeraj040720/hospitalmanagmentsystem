import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctoradmineditpage',
  standalone: false,
  templateUrl: './doctoradmineditpage.component.html',
  styleUrl: './doctoradmineditpage.component.css'
})
export class DoctoradmineditpageComponent implements OnInit {
  activateRoute: any;
  

  constructor( private doctorService:DoctorService,private router:Router,private ActivateRoute:ActivatedRoute) { }


  sblock: boolean = false;
  doctorId: any;
  doctorData: any;
  doctorObject: any;
  doctorList: any;

  ngOnInit(): void {
    // Initialization logic can go here

    this.doctorId=this.ActivateRoute.snapshot.params['doctorId'];
    console.log(this.doctorId);
    this.doctorService.getDoctorById(this.doctorId).subscribe((response:any)=>{
      this.doctorObject=response;
      console.log(this.doctorObject);
    })
  }


  updateDoctor() {
    this.doctorService.updateDoctorById(this.doctorId, this.doctorObject).subscribe(
      (response: any) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Doctor Updated Successfully',
          text: 'The doctor\'s details have been successfully updated.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        }).then(() => {
          this.router.navigate(['adminviewdoctorurl']);
        });
      },
      (error: any) => {
        console.error('Error updating doctor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'There was an issue updating the doctor\'s details. Please try again.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#d33'
        });
      }
    );
  }



}
