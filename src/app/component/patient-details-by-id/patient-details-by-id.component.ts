import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { patient } from '../../../model/patient';
import { appointment } from '../../../model/appointment';

@Component({
  selector: 'app-patient-details-by-id',
  standalone: false,
  templateUrl: './patient-details-by-id.component.html',
  styleUrl: './patient-details-by-id.component.css'
})
export class PatientDetailsByIdComponent  implements OnInit{

  constructor(private patientService:PatientService,private router:Router){}

  //patient = new patient();
  //appointment = new appointment();
  patientId:any;
  sblock:boolean=false;
  patientData:any;
  patientList:any;
  dblock:boolean=false;
  patientAppointments:any;
  patientappDetails:any;



  ngOnInit():void{
    this.patientId=sessionStorage.getItem('patientId');
    
    console.log("patient id in ngOnInit appointment"+this.patientId);

    this.patientService.getAppointmentByPatientID(this.patientId).subscribe(
    
      (response: any) => {
        this.dblock = true;
        this.patientAppointments = response;
       // const patientAppointments=this.patientAppointments
        console.log(this.patientAppointments);
        console.log(this.patientAppointments);
      },
      (error: any) => {
        console.error('Error fetching patient list:', error);
      }
    );
  }






//getting the patient id from appointment

// getPatientIdFromAppointment() {
//   this.patientId = sessionStorage.getItem('patientId');

//   console.log("patient id in getPatientIdFromAppointment" + this.patientId);

//   this.patientService.getAppointmentByPatientID(this.patientId).subscribe(

//     (response: any) => {
//       this.dblock = true;
//       this.patientAppointments = response;
//       console.log(this.patientAppointments);
//     },
//     (error: any) => {
//       console.error('Error fetching patient list:', error);
//     }
//   );
//   }
  




  viewPatientDetails(patientID: any){


    patientID = sessionStorage.getItem('patientId');
    console.log("patient id in view patient details"+patientID);
    this.patientService.getPatientById(patientID).subscribe(
      (response:any)=>{
        if(response!=null){
          this.sblock=true;
          this.patientData=response;
          console.log(this.patientData);
        }
      },
      (error:any)=>{
        console.error('Error fetching patient details:', error);
      }
    );
  }


  




  deletePatient(appointmentid: any) {
  
    this.patientService.deleteByAppointmentID(appointmentid).subscribe(
      (response: any) => {
        this.router.navigate(['']);
        console.log('Patient deleted successfully:', response);
        // Optionally, refresh the patient list or navigate to another page
        
      } );
    }
    


    exportToPDF(appointmentid: any) {
      const doc = new jsPDF();
    
      this.patientService.getAppointmentById(appointmentid).subscribe((response: any) => {
        this.patientappDetails = response;
        console.log(this.patientappDetails);
    
        // Title
        doc.setFontSize(18);
        doc.setTextColor(40, 40, 40); // Dark gray color
        doc.text('EDUBRIDGE HOSPITALS', 10, 10);
        
    
        // Add a line below the title
        doc.setDrawColor(0, 0, 0); // Black color for the line
        doc.line(10, 15, 200, 15); // Draw line from (10, 15) to (200, 15)
    
        // Patient Details
        if (this.patientappDetails && this.patientappDetails.patient) {
          const patient = this.patientappDetails.patient;
    
          doc.setFontSize(12);
          doc.setTextColor(50, 50, 50); // Slightly lighter gray for text
    
          // Add a background color for the section
          doc.setFillColor(240, 240, 240); // Light gray background
          doc.rect(10, 20, 190, 130, 'F'); // Draw filled rectangle for background
    
          // Add patient details with padding
          const startY = 25; // Starting Y position for patient details
          const lineHeight = 10; // Line height for each detail
    
          doc.text(`Name: ${patient.patientname || 'N/A'}`, 15, startY);
          doc.text(`Age: ${patient.age || 'N/A'}`, 15, startY + lineHeight);
          doc.text(`Gender: ${patient.patientgender || 'N/A'}`, 15, startY + lineHeight * 2);
          doc.text(`Phone Number: ${patient.patientphoneNum || 'N/A'}`, 15, startY + lineHeight * 3);
          doc.text(`Email: ${patient.patientemail || 'N/A'}`, 15, startY + lineHeight * 4);
          doc.text(`Address: ${patient.patientaddress || 'N/A'}`, 15, startY + lineHeight * 5);
          doc.text(`Blood Group: ${patient.bloodGroup || 'N/A'}`, 15, startY + lineHeight * 6);
          doc.text(`Appointment Date: ${patient.appointmentDate || 'N/A'}`, 15, startY + lineHeight * 7);
          doc.text(`Prescription: ${patient.patientPrescription || 'N/A'}`, 15, startY + lineHeight * 8);
          doc.text(`Dosage: ${patient.patientDoasge || 'N/A'}`, 15, startY + lineHeight * 9);
        } else {
          doc.setTextColor(255, 0, 0); // Red color for error message
          doc.text('No patient data available to export.', 10, 30);
        }
    
        // Save the PDF
        doc.save('Patient_Prescription.pdf');
      }, error => {
        console.error('Failed to fetch appointment details:', error);
        doc.setTextColor(255, 0, 0); // Red text for error
        doc.text('Error: Unable to fetch patient data.', 10, 30);
        doc.save('Patient_Prescription.pdf');
      });
    }
  }