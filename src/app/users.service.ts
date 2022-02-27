import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Users data should be stored in backend
  users: any[] = [
    { email: 'admin1@gmail.com', password: 'password', role: 'admin', token: "token1" },
    { email: 'company1@gmail.com', password: 'password', role: 'company', token: "token2" },
    { email: 'provider1@gmail.com', password: 'password', role: 'service_provider', token: "token3" },
    { email: 'driver1@gmail.com', password: 'password', role: 'driver', token: "token4" },
    { email: 'admin2@gmail.com', password: 'password', role: 'admin', token: "token5" },
    { email: 'company2@gmail.com', password: 'password', role: 'company', token: "token6" },
    { email: 'provider2@gmail.com', password: 'password', role: 'service_provider', token: "token7" },
    { email: 'driver2@gmail.com', password: 'password', role: 'driver', token: "token8" },
  ]

  constructor() { }

  login(email: string, password: string): boolean{
    let user = this.users.find(function(u){
      return (u.email == email && u.password == password)
    })
    if(user){
      localStorage.setItem("token", user.token)
      return true
    }
    return false
  }

  getUser(): any {
    let token = localStorage.getItem("token")
    if(token){
      return this.users.find(function(u){
        return u.token == token
      })
    }
    return false
  } 

  logout() {
    localStorage.removeItem("token")
  }

}
