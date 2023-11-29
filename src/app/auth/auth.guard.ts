import { Injectable, inject} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserContextService } from '../context/user-context.service';
import { User } from 'src/interface/User';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}

export const authGuard = () => {
  const useContext = inject(UserContextService);
  const router = inject(Router);
  let user:User | any;
  useContext.value.subscribe(u=> user = u || {});
  console.log(user);
  
  if (user.firstName === undefined) {
    alert('You have to login as employer to post a job!');
    router.navigate(['login']);
  } else if (user.role !== 'employer') {
    if (user.firstName === undefined) {
      alert('You must registrate as employer!');
      router.navigate(['registration']);
    } else {
      alert('You must registrate as employer, logout first!');
      router.navigate(['/']);
    }
  }
};
