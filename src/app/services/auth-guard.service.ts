import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../services/api-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  token: any | undefined;
  cookieVerified: boolean;

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //const user = this.authService.currentUserValue;
    //empty user=> {}
    //if (Object.keys(user).length === 0) {
    let t = localStorage.getItem('token');
    //         console.log(t);
    await this.apiService
      .verifyCookie({ token: t })
      .toPromise()
      .then(
        (res: any) => {
          console.log('cookie verified');
          this.cookieVerified = true;
        },
        (error: any) => {
          console.log('could not verify cookie');
          this.cookieVerified = false;
        }
      );

    if (t && this.cookieVerified) {
      console.log('can activate true');
      return true;
    }
    console.log('can activate false');
    // not logged in so redirect to login page with the return url
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
