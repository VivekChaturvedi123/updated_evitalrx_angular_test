import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment';

  constructor(private http: HttpClient) {}

  checkoutOrder(orderData2: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/checkout`,orderData2 );
  }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/place_order`, orderData);
  }

  getOrderDetails(orderId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/view`, { order_id: orderId });
  }
}