import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() 
  {

  }
  
  @Output() event = new EventEmitter();

  getItems() {
    return [
        /*{
           "_id":"6246bffbb17657dd5e254fff",
           "extras":[
              {
                 "name":"lettuce"
              }
           ]
        }*/
     ];
  }
}
