import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { MyMaterialModuleModule } from '../my-material-module/my-material-module.module';

@NgModule({
  imports: [
    CommonModule,MyMaterialModuleModule
  ],
  declarations: [UploadComponent],
  exports:[UploadComponent]

})
export class CustomerMatModule { }
