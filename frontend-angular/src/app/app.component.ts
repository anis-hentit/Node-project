import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';

  // Define the routes where you don't want to show the navbar
  private excludedRoutes = ['/', '/login', '/register'];

  constructor(private router: Router) {
    // Listen to navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update the visibility of the navbar whenever the route changes
        this.shouldShowNavbar();
      }
    });
  }

  // Function to determine if the navbar should be shown
  shouldShowNavbar(): boolean {
    // Check if the current route is one of the excluded ones
    return !this.excludedRoutes.includes(this.router.url);
  }
}
