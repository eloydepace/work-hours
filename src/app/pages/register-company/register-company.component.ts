import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company, CompanyCreate } from '../../../interfaces/company';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyService } from '../../services/company-service.service';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})

export class RegisterCompanyComponent implements OnInit {

    //CREACION DEL OBJETO EMPRESA Y PRIMER ADMINISTRADOR

    companyName: string = "";
    cif: string = "";
    logo: string = "";
    name: string = "";
    lastName: string = "";
    dni: string = "";
    password: string = "";
    email: string = "";
    admin: string = "";
  
    constructor(
      private companyService: CompanyService,
      private router: Router,
      private toast: ToastrService
    ){}
  
    ngOnInit(): void { }
  
    registerCompany(){
  
      const company: CompanyCreate = {
        companyName: this.companyName,
        cif: this.cif,
        logo: this.logo,
        name: this.name,
        lastName: this.lastName,
        dni: this.dni,
        password: this.password,
        email: this.email,
        admin: 'yes'
      }
  
      //COMPROBACION DE QUE SE HAN RELLENADO TODOS LOS CAMPOS
  
      if(this.companyName == '' || this.cif == '' || this.name == '' || this.lastName == '' || this.dni == '' || this.password == '' || this.email == ''){
        this.toast.error("Rellena todos los campos.")
        return
      }
  
      this.companyService.signIn(company)
      .subscribe(data =>{
        this.toast.success(`${this.companyName} creado correctamente.`)
        this.router.navigate(['/login'])
      }, (event: HttpErrorResponse) =>{
        if(event.error.msg){
          this.toast.warning(event.error.msg, 'Error')
        }else{
          this.toast.error('Error en el Servidor', 'Error')
        }
      })
  
    }
  

}
