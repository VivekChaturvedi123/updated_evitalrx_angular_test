import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const existingItemIndex = currentItems.findIndex(i => i.medicine_id === item.medicine_id);

    if (existingItemIndex !== -1) {
      currentItems[existingItemIndex].quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(medicineId: string) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.medicine_id !== medicineId);
    this.cartItemsSubject.next(updatedItems);
  }

  updateQuantity(medicineId: string, quantity: number) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(item => 
      item.medicine_id === medicineId ? { ...item, quantity } : item
    );
    this.cartItemsSubject.next(updatedItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}