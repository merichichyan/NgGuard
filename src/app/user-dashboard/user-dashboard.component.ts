import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: string
  constructor(private us: UsersService) {
    this.user = us.getUser().role
  }

  ngOnInit(): void {
  }

  logout(){
    this.us.logout()
    location.reload()
  }
}
