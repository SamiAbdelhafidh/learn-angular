import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,
    RouterLink,
    HomeComponent,
    AboutComponent,
    ProfilComponent,
    NavbarComponent,
    FormsModule,




  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangular';
  id=12121233
  name="samiabdelhafidh"
  
}
