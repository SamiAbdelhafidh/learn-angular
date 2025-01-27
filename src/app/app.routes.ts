import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},

    {
    path:'profil',
    children:[
        {path:'view/:name/:age',component:ViewComponent},
        {path:'details',component:DetailsComponent},
    ]
    },
    //{path:'view',component:ViewComponent},
    //{path:'details',component:DetailsComponent},
    {path:'contact',redirectTo:'about',pathMatch:'full'},
    {path:'**',component:PagenotfoundComponent}

   
];
///@NgModule({
 ///   imports: [RouterModule.forRoot(router)],
///    exports: [RouterModule]
//})
///export class AppRoutingModule{ }
