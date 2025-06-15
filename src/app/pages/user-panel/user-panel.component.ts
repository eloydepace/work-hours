import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-panel',
  imports: [HeaderComponent],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})

export class UserPanelComponent implements OnInit{

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
