import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  imports: [NavBarComponent, HeaderComponent, CommonModule, TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = [{
    name: 'Eloy',
    lastName: 'de Paz',
    dni: '01943749L',
    email: 'eloydeoz@gmail.com',
    admin: 'yes',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
  {
    name: 'Rodrigo',
    lastName: 'Germán',
    dni: '01943749A',
    email: 'rodrigo@gmail.com',
    admin: 'no',
    status: ''
  },
]
}
