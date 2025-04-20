import { Component, OnInit } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminviewpatient',
  standalone: false,
  templateUrl: './adminviewpatient.component.html',
  styleUrl: './adminviewpatient.component.css'
})
export class AdminviewpatientComponent implements OnInit {

  sblock: boolean = false;
  patientData = new patient(); 
  constructor(private patientService:PatientService , private router:Router)  { }
 patientList:any;




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


 

}


