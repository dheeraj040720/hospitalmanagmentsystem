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
  doctorId:any;
  ngOnInit(): void {
    // Initialization logic can go here
    // this.patientService.getAllPatients().subscribe(
    //   (response:any) => {
    //     this.patientList = response;
    //     console.log(response);

    //   });
    this.doctorId=sessionStorage.getItem('doctorId');
 
      this.patientService.getAppointmentByDoctorID(this.doctorId).subscribe(
        (response : any) => {
          this.patientList = response;
          console.log(response);

        }
      );
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
  doc.setTextColor(40, 40, 40); // Dark gray color
  doc.text('EDUBRIDGE HOSPITALS', 10, 10);

  // Add a line below the title
  doc.setDrawColor(0, 0, 0); // Black color for the line
  doc.line(10, 15, 200, 15); // Draw line from (10, 15) to (200, 15)

  // Patient Details
  if (this.patientData) {
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50); // Slightly lighter gray for text

    // Add a background color for the section
    doc.setFillColor(240, 240, 240); // Light gray background
    doc.rect(10, 20, 190, 130, 'F'); // Draw filled rectangle for background

    // Add patient details with padding
    const startY = 25; // Starting Y position for patient details
    const lineHeight = 10; // Line height for each detail

    doc.text(`Name: ${this.patientData.patientname}`, 15, startY);
    doc.text(`Age: ${this.patientData.age}`, 15, startY + lineHeight);
    doc.text(`Gender: ${this.patientData.patientgender}`, 15, startY + lineHeight * 2);
    doc.text(`Phone Number: ${this.patientData.patientphoneNum}`, 15, startY + lineHeight * 3);
    doc.text(`Email: ${this.patientData.patientemail}`, 15, startY + lineHeight * 4);
    doc.text(`Address: ${this.patientData.patientaddress}`, 15, startY + lineHeight * 5);
    doc.text(`Blood Group: ${this.patientData.bloodGroup}`, 15, startY + lineHeight * 6);
    doc.text(`Appointment Date: ${this.patientData.appointmentDate}`, 15, startY + lineHeight * 7);
    doc.text(`Prescription: ${this.patientData.patientPrescription}`, 15, startY + lineHeight * 8);
    doc.text(`Dosage: ${this.patientData.patientDoasge}`, 15, startY + lineHeight * 9);
  } else {
    doc.setTextColor(255, 0, 0); // Red color for error message
    doc.text('No patient data available to export.', 10, 30);
  }

  // Save the PDF
  doc.save('Patient_Prescription.pdf');
}




p:number=1;
count:number=5;












}