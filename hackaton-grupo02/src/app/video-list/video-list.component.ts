import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload-service.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  items: any[];
  constructor(private uploadService: UploadService) { 
    this.items = [];
  }

  ngOnInit() {
    this.uploadService.readFiles().subscribe(data => {
      console.log(data);
      data.data.forEach((v:any, i:any)=> {
        this.items.push(v);
      });
    });
  }
}
