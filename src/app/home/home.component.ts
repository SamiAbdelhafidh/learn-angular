import { Component, isStandalone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm ,FormsModule, FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms'; // Import NgForm here
import { Router } from 'express';


@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true
})
export class HomeComponent implements OnInit {
  
  myForms: any;

  constructor(private formbuilder:FormBuilder) {} 

  ngOnInit(): void {
    this.myForms=this.formbuilder.group({
      fname:['',Validators.required],
      age:['',Validators.required],
    });
  }


  print(ff:NgForm){
    console.log(ff.value)
  }
  get fname(){
    return this.myForms.get('fname')
  }
  get age(){
    return this.myForms.get('age')
  }

  
 


profile={
firstName:"bassem",
Standalone:true,
lastName:"abedelhafidh",
age:"23"}
linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8184XmlGy4JPXNX4NOOD-KDX1I8u4jx7Xw&s" 


firstName="sami"
lastName="abedelhafidhh"


  

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




add(f:NgForm){
  
  let data=f.value
  console.log(data.firstName) //or afficher tous data-->console.log(data) OR console.log(f)
  console.log(data.lastName)
  console.log(f.value.age)
  console.log(f.value.sexe)
}

 goToDet(){
  //this.route.navigate(['/profil/details'])
}
goToView(){
 // this.route.navigate(['/profil/view'])
}

}
