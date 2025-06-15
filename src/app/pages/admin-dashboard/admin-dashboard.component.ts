import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [NavBarComponent, HeaderComponent, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent implements OnInit {

  userData: any

  title = 'work-hours';

  actualHour? : string;

  ngOnInit(): void {
      setInterval(() =>{
        this.getHours()
      },1000)

      const userJSON = localStorage.getItem('userData')
      this.userData = JSON.parse(userJSON!)

  }

  getHours(){
    const date = new Date()
    const hour = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    this.actualHour = `${hour}:${minutes}:${seconds}`
  }


}
