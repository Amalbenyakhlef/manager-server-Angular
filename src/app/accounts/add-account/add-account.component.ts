import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  nom!:string;
  statut!:string;
  @Output() sendAccToHome =new EventEmitter<Account>();
  constructor() { }

  ngOnInit(): void {
  }

  addAccount (){
    const newAccount :Account ={
      nom: this.nom,
      statut: this.statut,
    };
    console.log(newAccount);
    this.sendAccToHome.emit(newAccount);
  
  }
  

}
