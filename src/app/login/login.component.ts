import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == 'sundar@gmail.com' && this.password == '123456'){
      alert('Welcome!')
      this.router.navigate(['home']);
    }else{
      alert('Unauthorized User')
    }
  }

}
