import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
    name:'sami'
    last:'abdelhafidh'
    country:'tunisia'
  }

  constructor() { }

  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)

  }

}
