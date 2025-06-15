import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../interfaces/user';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  //CREACION DEL OBJETO USUARIO

  name: string = "";
  lastName: string = "";
  dni: string = "";
  password: string = "";
  email: string = "";
  admin: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastrService
  ){}

  ngOnInit(): void { }

  registerUser(){

    const user: User = {
      name: this.name,
      lastName: this.lastName,
      dni: this.dni,
      password: this.password,
      email: this.email,
      admin: this.admin
    }

    //COMPROBACION DE QUE SE HAN RELLENADO TODOS LOS CAMPOS

    if(this.name == '' || this.lastName == '' || this.dni == '' || this.password == '' || this.email == '' || this.admin == ''){
      this.toast.error("Rellena todos los campos.")
      return
    }

    this.userService.signIn(user)
    .subscribe(data =>{
      this.toast.success(`${this.name} creado correctamente.`)
      this.resetForm()
    }, (event: HttpErrorResponse) =>{
      if(event.error.msg){
        this.toast.warning(event.error.msg, 'Error')
      }else{
        this.toast.error('Error en el Servidor', 'Error')
      }
    })

  }

  //RESETEO DEL FORMULARIO PARA REGISTRAR MÁS USUARIOS
  resetForm(){

    this.name = "";
    this.lastName = "";
    this.dni = "";
    this.password = "";
    this.email = "";
    this.admin = "";

  }

}
