import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TableModule } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company-service.service';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, NavBarComponent, HeaderComponent, TableModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  userIdString! : string;
  userIdNumber! : number

  constructor(private router: Router, private route: ActivatedRoute, private _companyService: CompanyService){}

ngOnInit(): void {
  this.userIdString = this.route.snapshot.paramMap.get('id')!
  this.userIdNumber = Number(this.userIdString);
  this._companyService.getChecksByUser({userId: this.userIdNumber})
  .subscribe((res) => {
    console.log(res);
  })

}
  hours! : any;


}
