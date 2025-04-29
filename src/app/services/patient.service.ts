import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { patient } from '../../model/patient';
import { appointment } from '../../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) {

   }


   url="http://localhost:8089/api/patient";

   url1="http://localhost:8089/api/appointment";
   

   registerPatient(patient:any){


    return from(

      fetch(this.url,{
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body:JSON.stringify(patient)
    
      }).then((res:Response)=>this.handleResponse(res))
    );
       }

       private async handleResponse(res:Response){
        if(!res.ok){
    
    
          const error=await res.json();
          throw new Error(`Error ${res.status}:${error}`);
    
        }
        return res.status! === 204? res.json() : {};
    
      }



      loginPatient(patient : patient)
      {
        console.log(patient);
        return this.httpClient.post(`${this.url}/loginPatient`,patient);
      
      }


      getAllPatients():Observable<patient>{
        return from(fetch( `${this.url}`)
    
        .then(res=>{
          if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();


        })
        );

      }



getPatientById(patientId:any)
{
  return this.httpClient.get(`${this.url}/${patientId}`);

}


       /*getPatientById(patientID:any):Observable<patient>{
        return from(
          fetch(`${this.url}/${patientID}`).then(res=>(
          this.handleResponse(res))
        
        )
        );
      }*/

      deletePatient(patientID:number):Observable<any>{

        return from (
          fetch(`${this.url}/getpatientafterdelete/${patientID}`,{
            method:'DELETE',
          }).then(res=>this.handleResponse(res))
        );

      }


      deleteByAppointmentID(appointmentID:number):Observable<any>{

        return from (
          fetch(`${this.url1}/getappointmentafterdelete/${appointmentID}`,{
            method:'DELETE',
          }).then(res=>this.handleResponse(res))
        );
      }





      updatePatientById(patientID:any,patientobject:any):Observable<any>{
        return from(
          fetch(`${this.url}/${patientID}`,{

            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(patientobject)

          }).then(res=>this.handleResponse(res)
          )); 
        
        }



     /*   createAppointment(patientID:any,doctorID:any,appointmens:any)
        {

              return from(
          fetch(`${this.url1}/${patientID}/${doctorID}`,{

            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(appointmens)

          }).then(res=>this.handleResponse(res)
          ));

      

        }*/
        createAppointment1(patientID:any,doctorID:any,appointment: appointment): Observable<any> {
          console.log(typeof appointment);     
          return this.httpClient.post(`${this.url1}/${patientID}/${doctorID}`, appointment);
        }

      

        getAppointmentByDoctorID(doctorID:any){

          return this.httpClient.get(`${this.url1}/getappointbydoctorId/${doctorID}`);
        }


        getAppointmentByPatientID(patientID:any){
        
          return this.httpClient.get(`${this.url1}/getappointbypatientID/${patientID}`);
        }

        getAppointmentById(appointmentid:any)
        {
            return this.httpClient.get(`${this.url1}/${appointmentid}`);
        }
        

        checkExistingAppointment(patientID:any,doctorID:any,appointmentDate:any,appointmentTime:any): Observable<any> {

          return this.httpClient.get(`${this.url1}/check?patientId=${patientID}&doctorId=${doctorID}&appointmentDate=${appointmentDate}&appointmentTime=${appointmentTime}`);
        }

      }
