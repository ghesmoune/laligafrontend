import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Image } from '../../model/model';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  @Output()
  imageEmitter:EventEmitter<HttpResponse<any>> = new EventEmitter();
  selectedFiles: FileList;
  image:Image;
  progress: { percentage: number } = { percentage: 0 }  
  constructor(private filesService:FilesService) { }
  selectFile(event){
    const file = event.target.files.item(0);
    
        if ( file && file.type.match('image.*')) {
          this.selectedFiles = event.target.files;
        } else {
          alert('invalid format!');
        } 
      }
  upload() {
    this.progress.percentage = 0;
    this.filesService.pushFileToStorage(this.selectedFiles.item(0)).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.imageEmitter.emit(event);
        this.selectedFiles = undefined;
      }
    });
  };

  ngOnInit() {
  }

}
