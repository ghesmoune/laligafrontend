import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyMaterialModuleModule } from '../my-material-module/my-material-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule , Validators }  from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,MyMaterialModuleModule,AppRoutingModule,FormsModule
  ],
  exports:[HeaderComponent, FooterComponent, NavbarComponent],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class TemplateModule { }
