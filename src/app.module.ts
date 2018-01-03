import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { ContractComponent } from './contract.component';
import { EmailComponent } from './email.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    ContractComponent,
    EmailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }