import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionLiguesComponent } from './gestion-ligues/gestion-ligues.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyMaterialModuleModule } from '../my-material-module/my-material-module.module';
import { FormsModule , Validators }  from '@angular/forms';
import { ListeLeaguesComponent } from './liste-leagues/liste-leagues.component';
import { CustomerMatModule } from '../customer-mat/customer-mat.module';
import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { GestionGategorieComponent } from './gestion-gategorie/gestion-gategorie.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule,MyMaterialModuleModule,FormsModule,CustomerMatModule
  ],
  declarations: [AcceuilComponent, GestionLiguesComponent, ListeLeaguesComponent, LeagueDetailComponent, GestionGategorieComponent],
  exports:[
    AcceuilComponent
  ]
})
export class AdminModule { }
