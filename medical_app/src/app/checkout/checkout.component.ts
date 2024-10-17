import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
   styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  // proceedToOrder() {
  //   const items = this.cartItems.map(item => ({
  //     medicine_id: item.medicine_id,
  //     quantity: item.quantity
  //   }));

  //   this.orderService.checkoutOrder(items).subscribe(
  //     response => {
  //       console.log('Checkout successful', response);


  //       // const obj = { ...this.cartItems };
  //       // this.router.navigate(['/patientForm'], { state: obj });

  //       this.router.navigate(['/patientForm'],  { state:{ cartItems:this.cartItems}});



  //     },
  //     error => {
  //       console.error('Checkout failed', error);
  //     }
  //   );
  // }



  proceedToOrder(){
    this.router.navigate(['/patientForm'],  { state:{ cartItems:this.cartItems}});
  }

}




