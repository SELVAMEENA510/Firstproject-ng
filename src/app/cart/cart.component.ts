import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  item: any[] = [];
  tot: number = 0;

  constructor(private cartservice: CartService) { }
  ngOnInit(): void {
    this.item = this.cartservice.list();
    this.tot = this.cartservice.total();
  }

  removecart(cartId: any) {
    this.cartservice.remove(cartId);
    this.item = this.cartservice.list();
    this.tot = this.cartservice.total();
  }
  
}
