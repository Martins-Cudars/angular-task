import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PricingService } from './pricing.service'

@Component({
  selector: 'app-content-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  form: FormGroup;

  constructor(private pricingService: PricingService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }
  email: string = ''
  selectedPrice: number = 120

  selectPrice(price) {
    this.selectedPrice = price
  }

  onSubmit() {
    if (this.form.valid) {
      const payload = {
        email: this.email,
        price: this.selectedPrice
      }
      this.pricingService.sendForm(payload)
    } else {
        Object.keys(this.form.controls).forEach(field => { // {1}
          const control = this.form.get(field);            // {2}
          control.markAsTouched({ onlySelf: true });       // {3}
        })
    }

  }

}
