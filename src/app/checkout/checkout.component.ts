import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // array: any[] = []; // Example, replace with your actual array type
  last: boolean = false; // Declare 'last' property



  array = [
    { id: '1', image: 'assets/cream.jpeg', product: 'Hand - Cream', quantity: 3, price: '$39.40' },
    { id: '2', image: 'assets/cosmetic.jpeg', product: 'Cosmetic Cream - Glossic', quantity: 1, price: '$39.40' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuantity(item: any): void {
    item.quantity += 1;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: any): void {
    this.array = this.array.filter(i => i !== item);
  }

  
}
