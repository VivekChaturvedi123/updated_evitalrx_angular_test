import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment';
  private apiKey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3';

  constructor(private http: HttpClient) {}

  searchMedicines(searchString: string): Observable<any> {
    const body = {
      searchstring: searchString,
      apikey: this.apiKey
    };

    return this.http.post(`${this.apiUrl}/medicines/search`, body);
  }

  getProductDetails(body:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/medicines/view`, body);
  }




  
}
