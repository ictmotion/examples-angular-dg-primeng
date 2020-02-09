import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MoneyTransaction } from '../models/MoneyTransaction';
//import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransactionService {
  moneyTransactionList = [
    
    {"Amount":"100000",
    "BankAccountFrom":"JP002EXAM30002001",
    "BankAccountTo":"JP002EXAM30002002",
    "CurrencyCode":"JPY",
    "Description":"transfer of 100k.",
    "TimeStamp":"20200109"},

    {"Amount":"120000",
    "BankAccountFrom":"USA02EXAM30002001",
    "BankAccountTo":"USA02EXAM30002002",
    "CurrencyCode":"USD",
    "Description":"transfer of 12k.",
    "TimeStamp":"20200109"},

    {"Amount":"70000",
    "BankAccountFrom":"FR7630006000011234567890189",
    "BankAccountTo":"DE75512108001245126199",
    "CurrencyCode":"EUR",
    "Description":"transfer."
    ,"TimeStamp":"20200109"},

    {"Amount":"60000",
    "BankAccountFrom":"CH9300762011623852957",
    "BankAccountTo":"CH5604835012345678009",
    "CurrencyCode":"CHF",
    "Description":"transfer of swiss francs.",
    "TimeStamp":"20200109"}
  ];
//private http: HttpClient
  constructor() { }

  GetMoneyTransactions() {
    return this.moneyTransactionList;
  }

  //https://stackoverflow.com/questions/38067580/property-of-does-not-exist-on-type-typeof-observable
  //https://stackoverflow.com/questions/34660010/create-observablet-from-result
  GetMoneyTransactionsObservable() : Observable<Array<MoneyTransaction>> {
    return of(this.moneyTransactionList);
  }
}
