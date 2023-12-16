import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  signUpForm!: FormGroup;
  formFields = ['First Name', 'Last Name', 'Phone', 'Email', 'Country', 'Address', 'City', 'State', 'Postal Code']
  countryOptions = ['India', 'USA', 'Australia']

  email = new FormControl('', [Validators.required, Validators.email]);//************ */

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'First Name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)]),
      'Last Name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)]),
      'Phone': new FormControl('', [Validators.required, Validators.pattern(/^(\+98|0)?9\d{9}$/)]),
      'Email': new FormControl('', [Validators.required, Validators.email]),
      'Country': new FormControl('', [Validators.required]),
      'Address': new FormControl(''),
      'City': new FormControl(''),
      'State': new FormControl(''),
      'Postal Code': new FormControl(''),
    })
  }

  getErrorMessage(label: string) {
    if (this.signUpForm.get(label)?.hasError('required')) {
      return `${label} is required`
    }
    else if (this.signUpForm.get(label)?.hasError('pattern')) {
      if (label === 'Phone') {
        return 'Phone number must be a valid number.'
      }
      return `${label} must be an alphabates.`
    }
    else if (this.signUpForm.get('email')) {
      return 'Invalid Email'
    }

    return this.email.hasError('email') ? 'Not a valid email!' : '';
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
