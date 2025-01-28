import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
//import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [//RouterOutlet,
    //RouterLink,
   // HomeComponent,
   // AboutComponent,
    //ProfilComponent,
  //  NavbarComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  
 
})
export class NavbarComponent {

}
