import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    alert('Login successful!');
    this.router.navigate(['/adminchoosingurl']); // Redirect to admin dashboard
  } else {
    alert('Invalid username or password');
  }
}
}



