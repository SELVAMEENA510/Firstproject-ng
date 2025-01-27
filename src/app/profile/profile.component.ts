import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  currentUser: any;
constructor(private router:Router){}
  ngOnInit(): void {
    // Retrieve the stored user data from localStorage
    this.currentUser = JSON.parse(localStorage.getItem('CurrentUser') || '{}');
  }
  logout(): void {
    alert("Logged out");
    localStorage.removeItem('CurrentUser');
    this.router.navigate(['']);
  }
}
