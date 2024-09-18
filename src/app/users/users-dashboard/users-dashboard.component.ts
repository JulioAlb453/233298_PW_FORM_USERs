import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUsers } from '../../interface/iuser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent implements OnInit {

  users: IUsers[] = [];

  selectedUser: IUsers = {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  };

  is_beign_adding_user = false; 
  init_add_user_procees = true;
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private _service: UserService) {}

  ngOnInit(): void {
    this._service.getAll().subscribe(
      response => this.users = response
    );
  }

  addUser(user: IUsers): void {
    user.id = this.users.length + 1;
    this.users.push({...user}); 

    this.selectedUser = {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
    };

    console.log(this.users);
  }
}

