import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { AppRouterModule } from './app-router/app-router.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRouterModule ],
  declarations: [ AppComponent, HelloComponent,ParentComponent,ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
  constructor(private data:DataService){};
  
 }
