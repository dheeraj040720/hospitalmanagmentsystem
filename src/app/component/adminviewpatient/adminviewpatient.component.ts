import { Component, OnInit } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-adminviewpatient',
  standalone: false,
  templateUrl: './adminviewpatient.component.html',
  styleUrl: './adminviewpatient.component.css'
})
export class AdminviewpatientComponent implements OnInit {

  sblock: boolean = false;
  //patientData = new patient();
  patientData: any; 
  constructor(private patientService:PatientService , private router:Router)  { }
 patientList:any;
 patientId:any;
  patientObject : any;



  ngOnInit(): void {
    // Initialization logic can go here


    this.patientService.getAllPatients().subscribe(
       (response: any) => {

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
        this.router.navigate(['viewpatienturl']);
        console.log('Patient deleted successfully:', response);
        // Optionally, refresh the patient list or navigate to another page
        
      } );
    }
    
 


    
updatePatient()
{
this.patientService.updatePatientById(this.patientId,this.patientObject).subscribe((response:any)=>{
  console.log(response);
  alert("Patient Updated Successfully");
  this.router.navigate(['doctorviewurl']);

}

);
}










  
}






