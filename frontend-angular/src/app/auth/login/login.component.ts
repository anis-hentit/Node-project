import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  //standalone: true,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  username: string ="";
  password: string ="";

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
        response => {
          console.log('Logged in successfully');
          console.log(response)
          this.authService.setCurrentUser(response);
          this.router.navigate(['/profile', response.id]); // Assuming the response contains the id
        },
        error => {
          console.error('Login failed');
          // Handle login error
        }
    );
  }
}
