import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientAddCoponentComponent } from './client-add-coponent/client-add-coponent.component';
import { ClientLitComponentComponent } from './client-lit-component/client-lit-component.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAddCoponentComponent,
    ClientLitComponentComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
