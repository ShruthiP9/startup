import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import{ EventService} from './event.service';
import { FilterPipe } from './filter.pipe';
import { PersondetailsComponent } from './persondetails/persondetails.component';

import {RoutingModule} from './routing/routing.module';
import { LinkComponent } from './persondetails/link/link.component';




@NgModule({
  declarations: [
    AppComponent,


    FilterPipe,


    PersondetailsComponent,


    LinkComponent,


  



  
    
   
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
