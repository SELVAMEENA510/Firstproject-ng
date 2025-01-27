import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: false,

  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
  sign = {
    username: '',
    password: ''
  }


  Onlogin(form: NgForm): void {
    if (form.valid) {
      console.log("Submittig Sign-in data:", this.sign)

      this.http.get<any[]>("http://localhost:3000/login").subscribe({
        next: (users) => {
          const data = users.find((u) => (u.ftName.trim().toLowerCase()) === (this.sign.username.trim().toLowerCase()) &&
            u.passwrd === this.sign.password);
          if (data) {
            alert("Login successfull");
            console.log("Matched User Data:", data);

            localStorage.setItem('CurrentUser', JSON.stringify(data));
            State.logged = true;
            this.router.navigate(['']);
          }
          else {
            alert("Invalild Username or Password");
          }
        },
        error: (err) => {
          console.error("error fetching Users:", err);
          alert("An error occured while logging in. please try again")
        }
      });
    }
    else {
      alert('Please fill the form correctly')
    }

  }
  ngOnInit(): void { }

  movesign(event: Event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }
  passwordPattern: string =
    '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$';
  UsernamePattern: string = '^[a-zA-Z][a-zA-Z0-9._]{2,14}$';
}
class Sign {
  username!: string;
  password!: string
}

