import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload-service.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {

  constructor(private uploadService:UploadService ) { }

  ngOnInit() {
  }

  async upload(event:any){
    const file:File = event.target.files[0];
    if(file){
      const formData = new FormData();      
      formData.append('file', file, file.name);
      this.uploadService.upload(file);          
    }    
  }
}
