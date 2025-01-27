import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
    name:'sami',
    last:'louz'

  }
  isAdmin=true
  constructor() { }

  print(){
    console.log(this.data.name)
    console.log(this.data.last)
  }

}
