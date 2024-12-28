import { RouterModule,Routes } from '@angular/router';
import {RouterOutlet, RouterLink} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'profil/:id/:name',component:ProfilComponent}
];
