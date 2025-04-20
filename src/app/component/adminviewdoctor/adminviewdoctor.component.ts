import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { doctor } from '../../../model/doctor';

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


}
