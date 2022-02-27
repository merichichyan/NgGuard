import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
