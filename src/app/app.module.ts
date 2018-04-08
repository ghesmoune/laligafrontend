import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { TemplateModule } from './template/template.module';
import { AppRoutingModule } from './/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { LeagueService } from './services/ligue.service';
import { ClubeService } from './services/clube.service';
import { TeamService } from './services/equipe.service';
import { CompetitionService } from './services/competition.service';
import { MatchService } from './services/rencontre.service';
import { CategorieService } from './services/categorie.service';
import { ConferamtionDialogComponent } from './popups/conferamtion-dialog/conferamtion-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FilesService } from './services/files.service';
import { CustomerMatModule } from './customer-mat/customer-mat.module';
import { SheredService } from './services/shered.service';




@NgModule({
  declarations: [
    AppComponent,
    ConferamtionDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule,
    TemplateModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    CustomerMatModule
  ],
  providers: [LeagueService, ClubeService, TeamService, CompetitionService, FilesService,MatchService, CategorieService,{provide:MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},SheredService
  ],
  entryComponents: [
    ConferamtionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
