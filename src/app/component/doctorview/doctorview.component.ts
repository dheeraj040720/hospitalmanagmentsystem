import { Component, OnInit } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorview',
  standalone: false,
  templateUrl:'./doctorview.component.html',
  styleUrl: './doctorview.component.css'
})
export class DoctorviewComponent implements OnInit {

  
  sblock: boolean = false;
  patientData:any; 
  constructor(private patientService:PatientService , private router:Router)  { }
  patientList:any;
  ngOnInit(): void {
    // Initialization logic can go here
    this.patientService.getAllPatients().subscribe(
      (response:any) => {
        this.patientList = response;
        console.log(response);
      });
 
  }



 
 viewPatientDetails(patientId: any) {

  this.patientService.getPatientById(patientId).subscribe(
    (response: any) => {

      if(response!=null)  {
        this.sblock = true;
        this.patientData = response;
        console.log(this.patientData);
       console.log("patient details fetched successfully");
  
      } else {
        console.log("No patient found with the given ID.");
      }
    },
    (error: any) => {
      console.error('Error fetching patient details:', error);
    }
  );
}



deletePatient(patientId: any) {
this.patientService.deletePatient(patientId).subscribe(
  (response: any) => {
    this.router.navigate(['doctorviewurl']);
    console.log('Patient deleted successfully:', response);
    // Optionally, refresh the patient list or navigate to another page
    
  } );
}



updatePatient(patientId: any) {
  this.router.navigate(['diagnoisepatient', patientId]);
  console.log(patientId);
  console.log("update patient called")

}




}