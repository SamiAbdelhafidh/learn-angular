import { CommonModule } from '@angular/common';
import { Component,isStandalone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  name=''
  id=''
  country=''

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe(data=>{
   
    //  this.name=data.name
    //  this.id=data.id
    //  this.country=data.country
    })
    
  
  }
  ngOnInit(): void {
    
  }  
}
