import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientData: any;
  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('patient_id');
    const mobile = this.route.snapshot.paramMap.get('mobile');
  
    console.log('Patient ID:', patientId);
    console.log('Mobile:', mobile);
  
    if (patientId && mobile) {
      this.getPatientDetails(patientId, mobile);
    } else {
      this.errorMessage = 'Patient ID or Mobile number is missing!';
    }
  }

  getPatientDetails(patientId: string, mobile: string): void {
    const apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment/patients/view';
    const body = {
      apikey: 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3',
      patient_id: patientId,
      mobile: mobile
    };

    console.log('Request Body:', body); 
  
    this.http.post<any>(apiUrl, body).subscribe(
      (response) => {
        console.log('API Response:', response); 
        if (response.data.length > 0) {

          console.log(response.data,"000000000000000000000000000000000")
          this.patientData = response.data[0];
          console.log(this.patientData, "bhsjbcsdhjcsbhjsdbjhshjdvb");
        } else {
          this.errorMessage = response.status_message || 'Failed to retrieve patient details';
          console.log(this.errorMessage);
        }
      },
      (error) => {
        this.errorMessage = 'Error occurred while fetching patient details';
        console.error(error);
      }
    );
  }
}
