import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from './session.service';
import { DatabaseService } from './database.service';


@Injectable()
export class AuthGuard implements CanActivate {
    
    bch_user:any = [];
    
    constructor(public loc: Location, private router: Router, public session: SessionService,public db: DatabaseService) {
        console.log('Auth Guard');
    }
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        
        this.session.GetSession().subscribe(
            data => {
                this.bch_user = data;
                console.log(state.url);

            },
            error => {
                console.log('err');
                
            });
            
            
            if (this.bch_user.bch_login)
            {
                console.log(this.loc);
                console.log(this.bch_user);
                this.db.token = this.bch_user.token;
                return true;
            }
            else
            {
                this.db.token = '';
                this.router.navigate([''], { queryParams: { returnUrl: state.url }});
                return false;
            }
            
        }
        
    }