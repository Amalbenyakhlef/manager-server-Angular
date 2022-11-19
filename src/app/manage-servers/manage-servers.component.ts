import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  // ngClasse pour afficher les serveurs de tabServers dans le composant manager-server
  tabServers = [
    {
      name: 'Developpement server',
      type: 'small',
      date_d: new Date(2021, 12, 13),
      statut: 'critical',
    },
    {
      name: 'Developpement Test server',
      type: 'small',
      date_d: new Date(2020, 12, 13),
      statut: 'stable',
    },
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2019, 12, 13),
      statut: 'stable',
    },
    {
      name: 'Amal ben yakhlef',
      statut: 'medium',
    },
  ];
  constructor() {}

  ngOnInit(): void {}


  //the ngClasse : les valeurs differents de classe qu'on peut les manipuler... 
  affecterClasse(st: any) {
    return {
      'list-group-item-success': st === 'stable' ? true : false,
      'list-group-item-danger': st === 'critical' ? true : false,
      'list-group-item-warning': st === 'offline' ? true : false,
    };
  }

  //the function that add a new server object in the tabServers 
  addNewServer() {
    this.tabServers.push({
      name: 'new Server',
      type: 'medium',
      date_d: new Date(2019, 12, 13),
      statut: 'offline',
    });
  }
}
