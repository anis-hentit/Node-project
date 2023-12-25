// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    //standalone: true,

    templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string ="";
  password: string="";
  role: string="";

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit() {
    this.authService.register(this.username, this.password, this.role).subscribe(
        response => {
          console.log('Registration successful', response);
          console.log('Registration successful');
          this.authService.setCurrentUser(response);
          this.router.navigate(['/profile', response.id]);
          // Handle successful registration
        },
        error => {
          console.error('Registration failed');
          // Handle registration error
        }
    );
  }
}
