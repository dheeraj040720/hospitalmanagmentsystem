import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { patient } from '../../../model/patient';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctordiagnose',
  standalone: false,
  templateUrl: './doctordiagnose.component.html',
  styleUrl: './doctordiagnose.component.css'
})
export class DoctordiagnoseComponent  implements OnInit{


constructor(private router:Router,private activateRoute:ActivatedRoute,private patientservice:PatientService) { }
sblock: boolean = false;
patientId:any;
patientData: any
patientObject:any;
patientList:any;
 ngOnInit(): void {
  this.patientId=this.activateRoute.snapshot.params['patientId'];
  console.log(this.patientId);
  this.patientservice.getPatientById(this.patientId).subscribe((response:any)=>{
    this.patientObject=response;
    console.log(this.patientObject);
  }) 

}

updatePatient() {






  this.patientservice.updatePatientById(this.patientId, this.patientObject).subscribe(
    (response: any) => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Patient updated successfully',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        this.router.navigate(['doctorviewurl']);
      });
    },
    (error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong while updating the patient!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#d33'
      });
    }
  );
}





viewPatientDetails(patientId: any) {
  // Initialization logic can go here
  this.patientservice.getPatientById(patientId).subscribe(
    (response:any) => {

        if(response!=null)  {
        this.sblock = true;
      this.patientData = response;
      //console.log( "patientData"+ this.patientData);
        }
      }
    )




}
}  
  
