import { Component, OnInit } from '@angular/core';
import { MoneyTransactionService } from '../services/money-transaction.service';
import { MoneyTransaction } from '../models/MoneyTransaction';

@Component({
  selector: 'app-example-grid',
  templateUrl: './example-grid.component.html',
  styleUrls: ['./example-grid.component.css']
})
export class ExampleGridComponent implements OnInit {

  moneyTransactions: MoneyTransaction[];

  constructor(private moneyTransactionService: MoneyTransactionService) { }

  ngOnInit() {
      this.moneyTransactions = this.moneyTransactionService.GetMoneyTransactions(); //.then(moneyTransactions => this.moneyTransactions = moneyTransactions);
      console.log(this.moneyTransactions);
    }

}
