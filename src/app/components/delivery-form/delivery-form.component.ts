import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface DeliveryInfo {
  name: string;
  address: string;
  contact: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-delivery-form',
  imports: [CommonModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {
  @Output() infoChanged = new EventEmitter<DeliveryInfo>();

  deliveryForm: FormGroup;

  paymentMethods = [
    { label: 'GCash', value: 'gcash', icon: 'fab fa-google-pay' },
    { label: 'PayMaya', value: 'paymaya', icon: 'fas fa-wallet' },
    { label: 'Credit Card', value: 'credit-card', iconClass: 'fas fa-credit-card' },
    { label: 'Paypal', value: 'paypal', iconClass: 'fab fa-paypal' },
    { label: 'Cash on Delivery', value: 'cod', iconClass: 'fas fa-money-bill-wave' }
  ];

  constructor(private fb: FormBuilder) {
    this.deliveryForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-]{7,15}$/)]],
      paymentMethod: ['', Validators.required]
    });
  }

  ngOnInit() {
    const saved = localStorage.getItem('deliveryInfo');
    if (saved) {
      this.deliveryForm.setValue(JSON.parse(saved));
      this.emitChange();
    }

    this.deliveryForm.valueChanges.subscribe(val => {
      if (this.deliveryForm.valid) {
        localStorage.setItem('deliveryInfo', JSON.stringify(val));
        this.emitChange();
      }
    });
  }

  emitChange() {
    this.infoChanged.emit(this.deliveryForm.value);
  }
}
