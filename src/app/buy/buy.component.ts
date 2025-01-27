import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buy',
  standalone: false,

  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  constructor(private router: Router, private cartService: CartService) { }
  products = [
    { 
      id:1,
      name: 'Delicious Strawberry cake', 
      price: 499,
      cartadded:false,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpAFQu3JHtbnImemdr700l3OFq-SWY2UFtA&s"
    }, 
    { 
      id: 2, 
      name: 'Floral vannila cream cake ', 
      price: 399,
      cartadded:false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_urs7l90A7nqh6BU2sZtQVcR6HBPKWR43A&s'
    },
    { 
      id: 3, 
      name: 'Chocolate cream cake ', 
      price: 449,
      cartadded:false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hnoufytbNC9QEjkO3714EbZLDAABE0lWfQ&s'
    },
    { 
      id: 4, 
      name: 'Butterscotch cream cake ', 
      price: 399,
      cartadded:false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vAlP0FKFCEHtLMVF0e_TQrL2ukQC7ju3OQ&s'
    },
    { 
      id: 5, 
      name: 'Heart Red Velvet ', 
      price: 699,
      cartadded:false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6O_Sxzj5w8sy0BwqDWLOPTeXq63vo3yldQ&s'
    },
    { 
      id: 6, 
      name: 'Strawberry rose cake ', 
      price: 599,
      cartadded:false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboPSkQ-DKNoRVPiIDvaIc0_giypcM1ekyA&s'
    },]
    
  BuyProduct() {
    this.router.navigate(['/payment']);
    
  }

  addcart(product : any) {
    this.cartService.add(product);
    alert("Product added to cart");
  //  product.cartadded=true;
  }

  isDisabled(productId: number): boolean {
    return this.cartService.ItemDisabled(productId); // Disable button if product is added
  }
}
