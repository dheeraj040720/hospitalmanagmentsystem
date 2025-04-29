import { Component } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import Swal from 'sweetalert2'; 
import { DoctorService } from '../../services/doctor.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

 

@Component({
  selector: 'app-patientregister',
  standalone: false,
  templateUrl:'./patientregister.component.html',
  styleUrl: './patientregister.component.css'
})
export class PatientregisterComponent {


  patient = new patient();

  sblock :boolean=false;
  doctorData: any;

  constructor(private pateintService:PatientService,private doctorservice:DoctorService,private router:Router) { }
    

  // registerPatient()
  //   {

  //     console.log(this.patient);

  //     this.pateintService.registerPatient(this.patient).subscribe(
  //       (response) => {
  //         console.log('Patient registered successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error registering patient', error);
  //       }
  //     );





  

  registerPatient() {
      // Perform form submission logic here

      this.pateintService.registerPatient(this.patient).subscribe(
         (response:any) =>
         {

      console.log('Patient registered:', 
      Swal.fire({
        title: 'Success!',
        text: 'Patient registered successfully',
        icon: 'success',
        confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['']);
        
          
      })
    );
  },
          (error:any) =>
          {
   
      });
    
    }


    // viewDoctorDetails(doctorId: any) {

    //   this.doctorService.getDoctorById(doctorId).subscribe(
    //     (response: any) => {
    //       if(response!=null)  {
    //         this.sblock = true;
    //         this.doctorData = response;
    //         console.log(this.doctorData);
    //       }
    //     },
    //     (error: any) => {
    //       console.error('Error fetching doctor details:', error);
    //     }
    //   );
  
  
    // }




    //verification code

    registerPatientVerification(form: NgForm) {
      if (form.valid) {
        console.log('Patient Registered Successfully', this.patient);
        // You can add your API call or logic here
      } else {
        console.log('Form is invalid');
      }
    }

    
}
