import { Component, Input, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-client-lit-component',
  templateUrl: './client-lit-component.component.html',
  styleUrls: ['./client-lit-component.component.css']
})
export class ClientLitComponentComponent implements OnInit {
  myList: string[] = [];

  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.listService.list$.subscribe((value: string[]) =>{this.myList = value})
  }

}
