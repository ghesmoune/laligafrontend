import { NgModule } from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { AppComponent} from "./app.component";
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { GestionLiguesComponent } from './admin/gestion-ligues/gestion-ligues.component';
import { ListeLeaguesComponent } from './admin/liste-leagues/liste-leagues.component';
import { GestionGategorieComponent } from './admin/gestion-gategorie/gestion-gategorie.component';


  const routes : Routes =[
    { path : 'adminAcceuil', component : AcceuilComponent},
    {path : 'newLeague', component : GestionLiguesComponent},
    {path:'listOfLeagues', component :ListeLeaguesComponent},
    {path : 'newLeague/:id', component : GestionLiguesComponent},
    {path : 'newCategorie' , component : GestionGategorieComponent},
    { path : '', redirectTo : '/adminAcceuil' , pathMatch : 'full'},
    ];
@NgModule({
  exports : [RouterModule],
  imports : [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }