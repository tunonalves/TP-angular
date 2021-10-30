import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clientID: number = 0;
  firstName: string = "";
  lastName: string = "";
  dni: number = 0;
  email: string = "";
  address: string = "";

  constructor() {

   }

  ngOnInit(): void {
  }

}
