// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Adjust to your API URL
  private currentUser: any = null;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password, role });
  }

  setCurrentUser(user: any): void {
    this.currentUser = user;
    // Optionally store user details in localStorage or session
  }

  getCurrentUser(): any {
    return this.currentUser;
    // Optionally retrieve from localStorage or session
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  // Add method to check user role
  hasRole(requiredRole: string): boolean {
    const user = this.getCurrentUser();
    return user && user.role === requiredRole;
  }


  // auth.service.ts
  logout(): void {
    this.currentUser = null;
    // If you're storing user data in localStorage or sessionStorage, clear it here
    localStorage.removeItem('user');
    // Redirect to home or login page if needed
  }

}
