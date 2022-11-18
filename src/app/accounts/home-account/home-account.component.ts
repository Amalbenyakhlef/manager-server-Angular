import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent implements OnInit {
  listAccounts: Account[] = [
    {
      nom: 'master account',
      statut: 'active',
    },
    {
      nom: 'Amal account',
      statut: 'inactive',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addtolistaccount(newAccount: Account) {
    this.listAccounts.push(newAccount);
  }
}
