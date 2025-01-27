import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: false,
  
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
payment!:Payment;
  constructor(private http:HttpClient){}
ngOnInit(): void {
   this.payment={
  build:'',
  street:'',
  city:'',
  phne:'', 
  method:''
}}

  onlyLetters(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      event.preventDefault();   
    }
  }
  onlyNumbers(event: KeyboardEvent): void {
    const charCode = event.charCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 8) {
      event.preventDefault();  
    }
  }
  order(form:NgForm){
    if (form.valid) {
      alert("form submitted")
      this.http.post('http://localhost:3000/login', this.payment).subscribe(Response=>{
        console.log(Response); 
        form.reset();
      });
      
    
    
    
    }
  }
  phonePattern: string = '^[0-9]{10}$'; 
}
class Payment{
build!:string;
street!:string;
city!:string;
phne!:string;
method!:string
}


