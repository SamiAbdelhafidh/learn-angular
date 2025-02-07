import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ShareServiceService } from '../services/share-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-about',
  imports: [CommonModule,],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit ,OnDestroy {

  num:any
  ob:Subscription
  constructor(private share:ShareServiceService) {
    this.ob=this.share.testobservable().subscribe(val=>this.num=val)

  }
  ngOnInit() {

  }
  ngOnDestroy() {
      console.log("destroy")
      this.ob.unsubscribe()
  }
}
