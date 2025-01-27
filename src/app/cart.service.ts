import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  private disabledItems: Set<number> = new Set();

  constructor() { }

  add(productItem: any) {
    if (!this.disabledItems.has(productItem.id)) {
    this.items.push(productItem);
    this.disabledItems.add(productItem.id);
  }
}

  remove(cart: any) {
    this.items = this.items.filter(item => item.id !== cart);
    this.disabledItems.delete(cart);
  }

  total() {
    return this.items.reduce((total, items) => total + items.price, 0)
  }

  list() {
    return this.items;
  }
  ItemDisabled(itemId: number): boolean {
    return this.disabledItems.has(itemId);
  }
}

