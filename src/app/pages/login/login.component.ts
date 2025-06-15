import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //CREACION DEL OBJETO USUARIO

  dni: string = ''
  password: string = ''

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ){}

  logIn(){

    //COMPROBACION DE QUE SE HAN RELLENADO TODOS LOS CAMPOS

    if(this.dni == '' || this.password == ''){
      this.toastr.error("Rellena todos los campos.")
      return
    }

    const user: User = {
    dni: this.dni,
    password: this.password,
    }

    this.userService.logIn(user).subscribe({
      next: (res: any) => {
      
        const userData: any = {
          name: res.name,
          lastName: res.lastName,
          companyName: res.companyName
        }

        localStorage.setItem('userData', JSON.stringify(userData))

        localStorage.setItem('myToken', res.token)

        this.toastr.success('Sesión iniciada correctamente.')

        if(res.isAdmin == 'yes'){
          this.router.navigate(['/admin-dashboard'])
        }else if(res.isAdmin == 'no'){
          this.router.navigate(['/user-panel'])
        }


      },
      error: () =>{
        this.toastr.error('Error en el inicio de sesión.')
      }
    })

  }
}
