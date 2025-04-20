import { Component } from '@angular/core';
import { doctor } from '../../../model/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctordetails',
  standalone: false,
  templateUrl: './doctordetails.component.html',
  styleUrl: './doctordetails.component.css'
})
export class DoctordetailsComponent {

  doctor= new doctor();

  constructor(private doctorService:DoctorService) { }




  registerDoctor()
    {

      console.log(this.doctor);

      this.doctorService.registerDoctor(this.doctor).subscribe(
        (response) => {
          console.log('Doctor registered successfully', response);
        },
        (error) => {
          console.error('Error registering doctor', error);
        }
      );

    }

}
