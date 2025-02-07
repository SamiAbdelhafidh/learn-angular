import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  testobservable(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next('9ahboun')
      },2000)

      setTimeout(()=>{
        observer.next('yesser')
      },4000)

      setTimeout(()=>{
        observer.next('entyy') // .next() is the value of the observable
      },6000)

      //setTimeout(()=>{
        //observer.complete() // .complete() is brake the observable
      //},8000)

      setTimeout(()=>{
        observer.next('YA 9AHBA')
      },10000)

    })
  }

}
