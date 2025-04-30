import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
constructor(private router :Router) { }

onSubmit() {
  // Hardcoded credentials
  const adminUsername = 'admin';
  const adminPassword = 'admin';

 
    if (this.username === adminUsername && this.password === adminPassword) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back, Admin!',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        this.router.navigate(['/adminchoosingurl']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid username or password',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#d33'
      });
    }
  }
}




