import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { CompanyService } from '../../services/company-service.service';
import { FormsModule } from '@angular/forms';
import { Company } from '../../../interfaces/company';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [NavBarComponent, HeaderComponent, CommonModule, TableModule, ButtonModule, DialogModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {

  constructor(private _companyService: CompanyService, private toastr : ToastrService, private router: Router){}
  visible = false;
  users! : any;


  name: string = "";
  lastName: string = "";
  dni: string = "";
  password: string = "";
  email: string = "";
  admin: string = "";
  
  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  openModal(){
    this.visible = !this.visible
  }

  getUsers(): Promise<void> {
    return new Promise((resolve) => {
      const subscription = this._companyService.getUsers()
      .subscribe((res) => {
        console.log(res)
        this.users = res
        subscription.unsubscribe();
        resolve();
      })
    });
  }

  goToDetail(id : number){
    this.router.navigate(['/user-detail', id])

  }

  registerUser()
  {
    const userParams = {
      name : this.name,
      lastName: this.lastName,
      dni: this.dni,
      password: this.password,  
      admin: this.admin,
      email: this.email
    }

    const subscription = this._companyService.addUser(userParams)
    .subscribe({
      next: (res: any) => {
        console.log(res);
        this.toastr.success(res.msg);
        this.visible = false;
        this.getUsers();
        subscription.unsubscribe();
      },
      error: () => {
        this.toastr.error("Error al crear el usuario")
      }
    })
  }
}