import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { adminGuard } from './services/admin.guard';
import { authGuard } from './services/auth.guard';
import { employeeGuard } from './services/employee.guard';
import { UsersComponent } from './pages/users/users.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent}, 
    {path: 'register', component: RegisterComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [adminGuard]},
    {path: 'user-panel', component: UserPanelComponent, canActivate: [employeeGuard]},
    {path: 'users', component: UsersComponent, canActivate: [adminGuard]},
    {path: 'register-company', component: RegisterCompanyComponent},
    {path: 'user-detail/:id', component: UserDetailComponent, canActivate: [adminGuard]},

];
