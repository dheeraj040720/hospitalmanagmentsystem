import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { appointment } from '../../../model/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-choosing-doctor',
  standalone: false,
  templateUrl: './patient-choosing-doctor.component.html',
  styleUrl: './patient-choosing-doctor.component.css'
})
export class PatientChoosingDoctorComponent implements OnInit {
  sblock: boolean = false;
  doctorData: any;
  doctorList:any;
  patientId:any;
appointment=new appointment();

// Added this to track the selected doctor for showing input fields
selectedDoctorID: number | null = null;



  constructor(private doctorService:DoctorService,private patientService:PatientService,private router:Router) { }

  
  ngOnInit(): void {
    this.patientId=sessionStorage.getItem('patientId');
    this.doctorService.getAllDoctors().subscribe(
      (response:any) => {
        this.doctorList = response;
        console.log(response);
      });
  }


  viewDoctorDetails(doctorId: any) {

    this.doctorService.getDoctorById(doctorId).subscribe(
      (response: any) => {
        if(response!=null)  {
          this.sblock = true;
          this.doctorData = response;
          console.log(this.doctorData);
        }
      },
      (error: any) => {
        console.error('Error fetching doctor details:', error);
      }
    );


  }

  


  createAppointment(doctorID: any) {

  {
    console.log("appointment" +" "+this.appointment);
    console.log("patientid"+" "+this.patientId);
    console.log(   " doctorid "  + " "+doctorID);

this.patientService.checkExistingAppointment(this.patientId,doctorID,this.appointment.appointmentDate,this.appointment.appointmentTime).subscribe(

   (existingResponse: any) => {
    if(existingResponse.exists) {
      alert("an appointment already exists for this doctor on the selected date and time."); 
    }
    else {
    this.patientService.createAppointment1(this.patientId,doctorID,this.appointment).subscribe(
      (response: any) => {
        console.log('Appointment created successfully:', response);
        alert("Appointment Created Successfully");
        this.router.navigate(['patientchoosing']);
        
      },
      (error: any) => {
        console.error(' Appointment already exist', error);
        alert("Appointment already exist");
      }
    );
    }
  }
  );
  }



  }


  //  Called when user clicks "Book" to reveal input fields
  showInputsForDoctor(doctorID: number) {
    this.selectedDoctorID = doctorID;
    this.appointment = new appointment(); // reset appointment fields
  }



  }

