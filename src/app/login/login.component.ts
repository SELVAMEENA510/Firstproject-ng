import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { State } from '../app.component';


@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }
  login = {
    ftName: '',
    email: '',
    phne: '',
    passwrd: ''
  };
  loginn: any[] = [];

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Submitting:', this.login);
      this.loginservice.addData(this.login).subscribe({
        next: (res) => {
          console.log("User added:", res);
          localStorage.setItem('CurrentUser', JSON.stringify(res));
          alert("sign in successfull");
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log("Error adding user:", err);

        }
      });
    }
  }
  onlyNumbers(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 8) {
      event.preventDefault();
    }
  }

  onlyLetters(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) && charCode! == 32)) {
      event.preventDefault();
    }
  }
  change(event: Event) {
    event.preventDefault();
    this.router.navigate(['/sign-in']);
  }
  UserNamePattern: string = '^[a-zA-Z][a-zA-Z0-9._]{2,14}$';
  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  phonePattern: string = '^[0-9]{10}$';
  passwordPattern: string = '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$';
}

class Login {
  ftName!: string;
  ltName!: string;
  email!: string;
  phne!: string;
  passwrd!: string
}


