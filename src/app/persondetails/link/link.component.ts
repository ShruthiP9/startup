import { EventService } from './../../event.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  namelinks=[];
  constructor(private eservice:EventService){

  }

ngOnInit(){
  this.eservice.getPosts().subscribe(responseposts=>{this.namelinks=responseposts});
  
}

}
