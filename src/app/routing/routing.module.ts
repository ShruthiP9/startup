import { AppComponent } from './../app.component';
import { LinkComponent } from './../persondetails/link/link.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventService} from '../event.service';
import { PersondetailsComponent } from '../persondetails/persondetails.component';

//import{RouterModule } from '@angula r/router'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
        {path:'persondetails/:c.name',component:PersondetailsComponent},
        {path:'link',component:LinkComponent}

        
        
    ])
   
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
