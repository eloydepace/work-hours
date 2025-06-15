import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user-service.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const employeeGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  const token = localStorage.getItem('myToken')
  let isAdmin = ''

  if (token) {
    // VERIFICAMOS EL TOKEN
    return userService.verifyUser({ token }).pipe(
      // SE PROCESA LA RESPUESTA DEL BACKEND
      map(res => {
        // SI NO ES ADMIN CONTINUA
        if (res.user.isAdmin === 'no') {
          return true;
        } else if (res.user.isAdmin === 'yes') {
          // SI NO ES ADMIN REDIRIGE A USER-PANEL
          router.navigate(['/admin-dashboard']);
          return false;
        }else{
          router.navigate(['/login'])
          return false}
      }),
      catchError((error) => {
        // SI HAY UN ERROR REDIRIGE A LOGIN
        router.navigate(['/login']);
        return of(false);
      })
    );
  } else {
    // SI NO HAY TOKEN REDIRIGE A LOGIN
    router.navigate(['/login']);
    return of(false);
  }
};
