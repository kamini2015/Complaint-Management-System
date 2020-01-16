import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from './database.service';
// import { DialogComponent } from './DialogComponent';

@Injectable({
  providedIn: 'root'
})

export class SessionService implements OnInit{
  
  constructor(public route: ActivatedRoute, public router:Router, public db:DatabaseService) { }
//   public dialog:DialogComponent
  bch_user:any = {};
  
  ngOnInit()
  {
    this.bch_user.bch_login = false;
    console.log(this.bch_user);
  }
  
  GetSession():  Observable<any> 
  {
    this.bch_user = JSON.parse(localStorage.getItem('bch_user')) || [];
    console.log(this.bch_user);
    return of(this.bch_user);
  }
  
  LogOutSession()
  {
    this.bch_user = {};
    this.bch_user.bch_login = false;
    this.db.token = '';
    localStorage.removeItem('bch_user');
  }
  
  NextUrl:any = '';
  SetSession(data:any){
    this.NextUrl = this.route.snapshot.queryParams['returnUrl'] || '/dealer-list';
    this.db.FetchData(data,'login/submit')
    .subscribe((data:any) => {
      if(data.message=='Success')
      {
        console.log(data);
        this.bch_user = data.data;
        this.bch_user.bch_login = true;
        this.db.token = data.token;
        localStorage.setItem('bch_user',JSON.stringify(this.bch_user));
        console.log(this.NextUrl);
        console.log('****LOGIN****');
        this.router.navigate([this.NextUrl]);
      }
      else{
        // this.dialog.error('Please check your Username and Password');
      }
    },error=>{
    //   this.dialog.error('Something went wrong !!! Try Again...');
      console.log(error);
    });
    
  }
  
  
}