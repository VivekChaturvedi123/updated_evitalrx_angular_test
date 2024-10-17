import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dev-api.evitalrx.in/v1/fulfillment';
  public patientId: string | null = null; // To store patient ID

  constructor(private http: HttpClient) { }

  registerPatient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/patients/register`, data);
  }

  placeOrder(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders/place_order`, data);
  }

  checkout(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/orders/checkout`, data);
  }
}
