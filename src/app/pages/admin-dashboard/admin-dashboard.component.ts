import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service.service';

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
  workTime? : string;
  timestamp!: string;
  journeyStarted : boolean = false;

  constructor(private _userService : UserService){}

  async ngOnInit(): Promise<void> {
    await this.checkLatestClock();
  
      setInterval(() => {
        if (this.journeyStarted) {
        this.getElapsedTimeFromTimestamp(this.timestamp);
        console.log(this.workTime);
        }else{
          this.workTime = "00 : 00 : 00"
        }
      }, 1000);
  
    setInterval(() => {
      this.getHours();
    }, 1000);
  
    const userJSON = localStorage.getItem('userData');
    this.userData = JSON.parse(userJSON!);
  }

  checkLatestClock(): Promise<void> {
    return new Promise((resolve) => {
      const subscription = this._userService.getLatestCheck()
        .subscribe((res) => {
          if (res.eventType == 'entry') {
            this.journeyStarted = true;
          } else if (res.eventType == 'exit') {
            this.journeyStarted = false;
          }
          this.timestamp = res.timestamp;
  
          subscription.unsubscribe();
          resolve();
        });
    });
  }
  

  getElapsedTimeFromTimestamp(timestamp: string): void {
    const startTime = new Date(timestamp).getTime();
    const now = Date.now();
  
    const diffMs = now - startTime;
  
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  
    this.workTime = `${diffHours} : ${diffMinutes} : ${diffSeconds}`;
  }
  

  getHours(){
    const date = new Date()
    const hour = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    this.actualHour = `${hour}:${minutes}:${seconds}`
  }

  startJourney(){
    const timestamp = new Date()
    console.log(timestamp);
    const req = {
      timestamp : timestamp
    }
    this._userService.checkin(req)
      .subscribe((res) => {
        console.log(res);
        this.checkLatestClock();
      })
    
  }

  endJourney(){
    const timestamp = new Date()
    console.log(timestamp);
    const req = {
      timestamp : timestamp
    }
    this._userService.checkout(req)
      .subscribe((res) => {
        console.log(res);
        this.checkLatestClock();
      })
    
  }



}
