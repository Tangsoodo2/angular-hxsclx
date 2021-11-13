import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { StatesService } from '../states.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart = this.cartService.getItems();
  states = this.stateService.getStates();
  
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address1:'',
    address2:'',
    city:'',
    state:'',
    zipCode:''
  });

  constructor(
      private cartService: CartService,
      private formBuilder : FormBuilder,
      private stateService : StatesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.itemsInCart = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  getStates(){
    return this.stateService.getStates();
  }

}
