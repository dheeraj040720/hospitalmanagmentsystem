import { Component } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import Swal from 'sweetalert2'; 

 

@Component({
  selector: 'app-patientregister',
  standalone: false,
  templateUrl:'./patientregister.component.html',
  styleUrl: './patientregister.component.css'
})
export class PatientregisterComponent {


  patient = new patient();

  constructor(private pateintService:PatientService) { }
    

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
      })
    );
  },
          (error:any) =>
          {
   
      });
    
    }
    
}
