import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { doctor } from '../../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient:HttpClient) { }



  url="http://localhost:8089/api/doctor";

  registerDoctor(doctor:any){
  return from(

      fetch(this.url,{
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body:JSON.stringify(doctor)
    
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






      getAllDoctors():Observable<doctor[]>{
        return from(fetch( `${this.url}`)
    
        .then(res=>{
          if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();


        })
        );
      }
      getDoctorById(doctorID:number):Observable<doctor[]>{
        return from(fetch( `${this.url}/${doctorID}`)
    
        .then(res=>{
          if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();


        })
        );
      }



        loginDoctor(doctor:doctor)
        {

          console.log(doctor);
          return this.httpClient.post(`${this.url}/logindoctor`,doctor);
          
        }


  }

