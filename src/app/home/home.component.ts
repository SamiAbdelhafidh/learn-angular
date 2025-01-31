import { Component, OnInit } from '@angular/core';
import { CommonModule,CurrencyPipe, DatePipe, TitleCasePipe,UpperCasePipe } from '@angular/common';
import { ShareServiceService } from '../services/share-service.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
z
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,UpperCasePipe,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
profile={
firstName:"bassem",
lastName:"abedelhafidh",
age:"23"}
linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8184XmlGy4JPXNX4NOOD-KDX1I8u4jx7Xw&s" 


firstName="sami"
lastName="abedelhafidhh"
age="23"

  

number=1
titleStyle="color=red"
inc(){
  this.number++
}
dec(){
  this.number--
}
red(){
  this.titleStyle="color:red;font-size:40px;"
}
green(){
  this.titleStyle="color:green;font-size:20px;"
}


verif=false

dataArray=["tunisia","morroco","france","kelibia"]


style1="green"
style2="30px"


goToDet(){
  //this.route.navigate(['/profil/details'])???
}
goToView(){
  //this.route.navigate(['/profil/view'])??
}
add(f:NgForm){
  console.log(f)
}


}
