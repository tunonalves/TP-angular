import { Component, Input, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-client-add-coponent',
  templateUrl: './client-add-coponent.component.html',
  styleUrls: ['./client-add-coponent.component.css']
})
export class ClientAddCoponentComponent implements OnInit {
  clientID: number = 0;
  firstName: string = "";
  lastName: string = "";
  dni: number = 0;
  email: string = "";
  address: string = "";

  //METHOD
  addclient(){
    alert(this.clientID+" "+this.firstName+" "+this.lastName+" "+this.dni+" "+this.email+" "+this.address);
    this.listService.createItem(this.clientID+" "+this.firstName+" "+this.lastName+" "+this.dni+" "+this.email+" "+this.address)
  }
  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
  }

}
