import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user-service.service';
import { Token } from '@angular/compiler';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('myToken')
  const router = inject(Router)

  if(token){
    return true
  }else{
    router.navigate(['/login'])
    return false
  }

};
