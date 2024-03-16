import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [		
    AppComponent,
      VideoUploadComponent,
      VideoListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
