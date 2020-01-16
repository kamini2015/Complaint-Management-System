import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // MyUrl:string = " http://nextstep.net.in/123ply/";
  // DbUrl:string = " http://nextstep.net.in/123ply/index.php/";

  MyUrl:string = " http://localhost/bch_newccrp/";
  DbUrl:string = " http://nextstep.net.in/bchcrm_api/index.php/";
 
  token:string = '';
  
  
  constructor(public http:HttpClient) { }
  header:any = new HttpHeaders();


  FetchData(request_data:any, fn:any)
  {
    this.header.append('Content-Type', 'application/json');
    console.log(request_data);
    return this.http.post(this.DbUrl+fn, JSON.stringify(request_data), {headers:this.header});
  }

  FileData(request_data:any, fn:any)
  {
    this.header.append('Content-Type',undefined);
    console.log(request_data);
    return this.http.post( this.DbUrl+fn, request_data, {headers : this.header});
  }


}
