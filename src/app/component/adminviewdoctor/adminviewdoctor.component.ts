import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { doctor } from '../../../model/doctor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminviewdoctor',
  standalone: false,
  templateUrl: './adminviewdoctor.component.html',
  styleUrl: './adminviewdoctor.component.css'
})
export class AdminviewdoctorComponent implements OnInit {

  
  sblock: boolean = false;
  doctorData= new doctor(); 
  constructor(private doctorService:DoctorService,private router:Router)  { }
  doctorList:any;



  ngOnInit(): void {
    // Initialization logic can go here

    this.doctorService.getAllDoctors().subscribe(
      (response:any) => {
        this.doctorList = response;
        console.log(response);
      });

  }



  viewDoctorDetails(doctorId: any) {

    this.doctorService.getDoctorById(doctorId).subscribe(
      (response: any) => {
        if(response!=null)  {
          this.sblock = true;
          this.doctorData = response;
          console.log(this.doctorData);
        }
      },
      (error: any) => {
        console.error('Error fetching doctor details:', error);
      }
    );


  }



  deleteDoctor(doctorID: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorService.deleteDoctor(doctorID).subscribe(
          (response: any) => {
            Swal.fire(
              'Deleted!',
              'The doctor has been deleted.',
              'success'
            );
            this.router.navigate(['adminviewdoctor']);
          },
          (error: any) => {
            console.error('Error deleting doctor:', error);
            Swal.fire(
              'Error!',
              'There was an issue deleting the doctor.',
              'error'
            );
          }
        );
      } else {
        Swal.fire(
          'Cancelled',
          'The doctor was not deleted.',
          'error'
        );
      }
    });
  }

updateDoctor(doctorId: any) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to edit this doctor\'s details?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, edit it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['admineditdoctor', doctorId]);
      console.log('Navigating to edit doctor with ID:', doctorId);
    } else {
      console.log('Edit action cancelled');
    }
  });
}



}
