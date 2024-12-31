import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  name=''
  id=''
  country=''
  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe(data=>{
   
     // this.name=data.name
     // this.id=data.id
      //this.country=data.country

    })
    
  
  }
  ngOnInit(): void {
    
  }  
}
