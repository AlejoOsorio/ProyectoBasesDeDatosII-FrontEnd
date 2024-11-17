import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDto } from '../../dto/login-dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDto: LoginDto;

  constructor() {
    this.loginDto = new LoginDto;
  }

  public iniciarSesion() {
    console.log(this.loginDto);
  }
}
