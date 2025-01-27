import { Component } from '@angular/core';
export const State = { logged: false };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'cakeshop';
 
   
  login() {
    State.logged = true;
  }
  logout() {
    State.logged = false;
  }


}
