import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  loggedUser: any | null;

  constructor(private router: Router) {
    if (typeof localStorage !== 'undefined') {
      const localUser = localStorage.getItem('loggedUser');
      if (localUser !== null) {
        this.loggedUser = JSON.parse(localUser);
      }
    }
  }

  onLogoff() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('loggedUser');
    }
    this.router.navigateByUrl('/');
  }
}
