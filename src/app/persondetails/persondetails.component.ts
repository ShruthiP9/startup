import { HttpModule} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { RoutingModule } from './../routing/routing.module';
import { EventService} from '../event.service';
import { FilterPipe } from '../filter.pipe';
import{Inter} from '../inter';
import { RouterModule, ActivatedRoute } from '@angular/router';

import{Http,Response} from '@angular/http';


@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {

  details;
  eventDetails=[];
  
  

  
  constructor(private route:ActivatedRoute,private eservice:EventService) { }
  ngOnInit(){
    this.eservice.getPosts().subscribe(responseposts=>{this.details=responseposts});
    
    
    this.route.paramMap
    .subscribe(params=>{
      let eveName=params.get('c.name');
      //the function is not being called
   this.eventDetails=this.getEvent(eveName)
   
    })
  }
  getEvent(value){
    for(let i=0;i<this.details.length;i++)
    {
      if(value=="Andrew Amernante")
      {
        return this.details[i];
      }else if( value=="Frank Wang"){
        return this.details[i+1];
      }else if( value=="Sissi Chen"){
        return this.details[i+2];
      }else if( value=="Diego Garcia"){
        return this.details[i+3];
      }else if( value=="Fuad Rashid"){
        return this.details[i+4];
      }
    }
  }
 
   
  }


