import { Component, OnInit } from '@angular/core';
import { patient } from '../../../model/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

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
  updateBlock:boolean=false;
  canViewDetails: boolean = false; // Flag to control the visibility of the details section
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

  console.log("update patient called");
  this.updateBlock=true;
  this.canViewDetails = true; // Set the flag to true to show the details section

}


exportToPDF() {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(18);
  doc.text('EDUBRIDGE HOSPITALS', 10, 10);
  
  // Patient Details
  if (this.patientData) {
    doc.setFontSize(12);
    doc.text(`Patient ID: ${this.patientData.patientID}`, 10, 30);
    doc.text(`Name: ${this.patientData.patientname}`, 10, 40);
    doc.text(`Age: ${this.patientData.age}`, 10, 50);
    doc.text(`Gender: ${this.patientData.patientgender}`, 10, 60);
    doc.text(`Phone Number: ${this.patientData.patientphoneNum}`, 10, 70);
    doc.text(`Email: ${this.patientData.patientemail}`, 10, 80);
    doc.text(`Address: ${this.patientData.patientaddress}`, 10, 90);
    doc.text(`Blood Group: ${this.patientData.bloodGroup}`, 10, 100);
    doc.text(`Appointment Date: ${this.patientData.appointmentDate}`, 10, 110);
    doc.text(`Prescription: ${this.patientData.patientPrescription}`, 10, 120);
    doc.text(`Dosage: ${this.patientData.patientDosage}`, 10, 130);
  } else {
    doc.text('No patient data available to export.', 10, 30);
  }

  // Save the PDF
  doc.save('Patient_Prescription.pdf');
}





p:number=1;
count:number=5;












}