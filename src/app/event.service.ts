import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import {Inter} from './inter';



@Injectable()
export class EventService {




  constructor(private http:Http ){
  
   }
   
   getPosts():Observable<any>
   {
     return this.http.get('assets/mock.json').map(res => this.extractTest(res)); 

    }
    private extractTest(res: Response) {
      let body = res.json();
      return body;
     }
  

  

   
    
   
  
}
