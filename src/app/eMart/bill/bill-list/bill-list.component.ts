import { Component, OnInit } from '@angular/core';

import { EmartService } from '../../emart.service';

import { Item } from '../../item';

import { Bill } from '../../bill';



@Component({

  selector: 'app-bill-list',

  templateUrl: './bill-list.component.html',

  styleUrls: ['./bill-list.component.css']

})

export class BillListComponent implements OnInit {

  bills: Bill[];
  
  cartItems: Item[];
  buyerName: string = 'John';
  buyerId: string = '101';
  buyerDate: string = '20/11/2019';
  buyerContact: string = 'sravz@gmail.com';
  amount: number = 0;

  

  constructor(protected emartService: EmartService) { }



  ngOnInit(): void {

    this.bills = this.emartService.getAllBills();

    

  }
  


  



}
