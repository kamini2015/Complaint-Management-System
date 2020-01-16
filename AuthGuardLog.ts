import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session.service';
import { DatabaseService } from './database.service';

@Injectable()
export class AuthGuardLog implements CanActivate {
  
  bch_user:any = [];
  constructor(private router: Router,public session: SessionService, public db: DatabaseService) {
    console.log('Auth Guard Log');
  }
  
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    this.session.GetSession().subscribe(
      data => {
        this.bch_user = data;
        console.log(this.bch_user);
        console.log(state.url);
      },
      error => {
        console.log('error');
        
      });
      
      
      if (this.bch_user.bch_login) {
        console.log(this.bch_user);
        if(state.url != '/')   {          
          //this.router.navigate([state.url]);
        }else{
          this.router.navigate(['/dealer-list']);
          
        }
        this.db.token = this.bch_user.token;
        return false;
        
      }else{
        this.db.token = '';
        return true;
      }
      
      
      
      
    }
    
  }
  
  