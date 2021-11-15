import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    AuthComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  bootstrap: [LoginComponent],
})
export class AuthModule {}
