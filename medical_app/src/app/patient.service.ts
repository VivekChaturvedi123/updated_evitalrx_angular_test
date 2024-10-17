import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment';

  constructor(private http: HttpClient) {}

  addPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients/add`, patientData);
  }

  getPatient(patientId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients/view`, { patient_id: patientId });
  }
}