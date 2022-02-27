import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.email || !this.password)
      return
    
    let login = this.us.login(this.email, this.password)
    location.reload()
  }
}
