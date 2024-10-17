import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  patientForm: FormGroup;
  responseMessage: string = '';
  cartData: any;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private toastr: ToastrService 
  ) {
    this.patientForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: [''],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      blood_group: ['', Validators.required]
    });

    this.cartData = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.cartData, 'llllllllllllllllllll');
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = {
        apikey: 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3',
        ...this.patientForm.value
      };
      this.patientService.addPatient(formData).subscribe(
        (response) => {
          if (response.status_code === '1') {
            this.responseMessage = 'Patient registered successfully. Patient ID: ' + response.data.patient_id;

    
            this.toastr.success('Patient registered successfully!', 'Success',response.message );

            console.log(response, "----------------------------");
            const obj = { ...this.cartData, ...this.patientForm.value, patient_id: response.data.patient_id };
            this.router.navigate(['/place-order'], { state: obj });
            this.patientForm.reset();
          } else {
            this.responseMessage = 'Failed to register patient: ' + response.status_message;

            // Show error toastr
            this.toastr.error('Failed to register patient', 'Error', response.message);
          }
        },
        (error) => {
          this.responseMessage = 'Error occurred during registration: ' + error.message;

          // Show error toastr
          this.toastr.error('Error during patient registration', 'Error',  error.message);
          console.error(error);
        }
      );
    } else {
      this.responseMessage = 'Please fill all required fields correctly.';
      this.toastr.warning('Please fill all required fields correctly.', 'Warning');
    }
  }
}
















