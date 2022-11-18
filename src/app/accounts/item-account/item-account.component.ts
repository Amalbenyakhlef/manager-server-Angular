import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrls: ['./item-account.component.css'],
})
export class ItemAccountComponent implements OnInit {
  @Input() oneAccount!: Account;
  constructor() {}

  ngOnInit(): void {}

  changeStatut(newStatut: string) {
    this.oneAccount.statut = newStatut;
  }
}
