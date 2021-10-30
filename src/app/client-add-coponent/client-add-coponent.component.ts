import { Component, OnInit } from '@angular/core';

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
  
  //GET
  getclientid(){
    return this.clientID;
  }
  getfirtname(){
    return this.firstName;
  }
  getlastname(){
    return this.lastName;
  }
  getdni(){
    return this.dni;
  }
  getemail(){
    return this.email;
  }
  getaddress(){
    return this.address;
  }
  //SET
  setclientid(){
    this.clientID;
  }
  setfirtname(){
    this.firstName;
  }
  setlastname(){
    this.lastName;
  }
  setdni(){
    this.dni;
  }
  setemail(){
    this.email;
  }
  setaddress(){
    this.address;
  }

  //METHOD
  addclient(){
    alert(this.clientID+" "+this.firstName+" "+this.lastName+" "+this.dni+" "+this.email+" "+this.address);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
