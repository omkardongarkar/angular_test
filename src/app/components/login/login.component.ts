import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { LoginRequest, LoginResponse } from '../../models/user/auth';
import { jwtDecode } from 'jwt-decode';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Ensure HttpClientModule is included here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';  // Variable to hold the error message

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // Email FormControl
      password: new FormControl('', [Validators.required, Validators.minLength(6)]), // Password FormControl
      remember: new FormControl(false)
    });
  }

  ngOnInit(): void { 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImFzc2lnbmVkX2FnZW50cyI6W10sImV4cCI6MTc0MTU4NTI5NX0.wSbZEGBe4YOwVncFCKjGZMuvE06tZMbmnaGNnlYSEVI";
    const decodedToken: any = jwtDecode(token);

    console.log("decodedToken : ",decodedToken);
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials: LoginRequest = {
        username: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }

      console.log("Login Credentials: ", this.loginForm.value);
      this.authService.login(credentials).subscribe({
        next: (response : LoginResponse) => {
          console.log('Login successful');      
          this.router.navigate(['/home']);
          // localStorage.setItem('token', response.token);
        },
        error: (err) => {
          this.errorMessage = 'Invalid credentials';
          console.error(err);
          this.router.navigate(['/home']);
        }
      });
    }
    


    // Scenario 1: User Login
    // When a user logs in:

    // On success → Store token and navigate to the dashboard.
    // On error → Show an error message.
    // On completion → Stop the loading spinner.

    // this.authService.login(credentials).subscribe((response) => {
    //   console.log(response);
    // });

    // this.authService.login(credentials).subscribe({
    //   next: (response) => console.log(response),
    //   error: (err) => console.error(err),
    //   complete: () => console.log('Request completed')
    // });

    // this.authService.login(credentials).subscribe({
    //   next: (response) => {
    //     console.log('Login successful', response);
    //     localStorage.setItem('token', response.token);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.error('Login failed', err);
    //     this.toastr.error('Invalid credentials');
    //   },
    //   complete: () => {
    //     console.log('Login process completed');
    //     this.loading = false; // Stop the spinner
    //   }
    // });
  }


  decodeToken(token: string): void {
    try {
      const decodedToken: any = jwtDecode(token);
      console.log('Decoded Token:', decodedToken);
  
      // Example: Store user data in localStorage or state
      localStorage.setItem('userId', decodedToken.userId);
      localStorage.setItem('role', decodedToken.role);
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }
}
