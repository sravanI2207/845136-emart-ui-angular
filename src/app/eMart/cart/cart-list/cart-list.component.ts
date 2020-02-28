import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
cartItems: Item[];
  constructor(protected emartservice : EmartService) { }

  ngOnInit(): void {
    this.cartItems = this.emartservice.getAllCart();
  }
  deleteCartItem(itemId: number)
  {
    this.emartservice.deleteCartItem(itemId);
    this.cartItems=this.emartservice.getAllCart();
  }
}
