import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  userData: any

    constructor(
      private router: Router
    ){}

  //EL BOTON DE LOGOUT ELIMINA EL TOKEN Y DEVUELVE AL LOGIN
  logOut(){
    localStorage.removeItem('myToken')
    this.router.navigate(['/login'])
    return
  }

  ngOnInit(): void {
      
    const userJSON = localStorage.getItem('userData')
    this.userData = JSON.parse(userJSON!)
  }

}
