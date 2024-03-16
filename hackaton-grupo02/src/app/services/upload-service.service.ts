import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    //headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  upload(fileContent: File){
      this.getBase64(fileContent).then((x:any) => {
        var url = environment.urlApi + "/api/Video";
        var content = x.res.split(',');        
        console.log(JSON.stringify(x));
        this.httpClient.post<any>(url, x, { headers: this.httpOptions.headers, responseType: "json", observe: 'response' }).subscribe(d => {window.location.reload();});
      }).catch(e => {
        console.error(e);
      });
  }

  upload2(formData:FormData){
    var url = environment.urlApi + "/api/Video";
    const subs$ = this.httpClient.post(url, formData, { headers: this.httpOptions.headers, responseType: "json", observe: 'response' });
    
    subs$.subscribe(x => {
      console.log(x);
    }); //, { headers: this.httpOptions.headers, responseType: "json", observe: 'response' }).subscribe(d => {window.location.reload();});
    

    // this.getBase64(fileContent).then((x:any) => {
    //   var url = environment.urlApi + "/api/Video";
    //   var content = x.res.split(',');        
    //   console.log(JSON.stringify(x));
    //   this.httpClient.post<any>(url, x, { headers: this.httpOptions.headers, responseType: "json", observe: 'response' }).subscribe(d => {window.location.reload();});
    // }).catch(e => {
    //   console.error(e);
    // });
}

  readFiles(){
    var url = environment.urlApi + "/api/Video";
    return this.httpClient.get<any>(url, {headers: this.httpOptions.headers, responseType: "json"});
  }

  getBase64(file: File){
    return new Promise((resolve, reject)=> {
      if(!file){
        reject('Arquivo nulo');
      }
      var reader = new FileReader();
      reader.onloadend = function() {
        resolve({res: reader.result, name: file.name});
      }
      reader.readAsDataURL(file);
    });
  }
}
