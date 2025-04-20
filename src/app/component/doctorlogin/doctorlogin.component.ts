import { Component } from '@angular/core';
import { doctor } from '../../../model/doctor';
import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

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


  loginDoctor(){

    this.doctorService.loginDoctor(this.doctor).subscribe(
      (response:any) => {
      console.log(response);

        if(response)  {
          this.userId=response.doctorID;
          sessionStorage.setItem('doctorId',this.userId);

         this.router.navigate(['/doctorviewurl']);
        } else{
          alert("Invalid Doctor ID or Password");
        //  this.router.navigate(['/doctorlogin']);
        }
      },
      (error:any) => {
        console.error('Error fetching doctor details:', error);
        alert("Invalid Doctor ID or Password");
      //  this.router.navigate(['/doctorlogin']);
      }


          


    );



  }
}



