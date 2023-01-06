import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  public userList = [];
  public userModel = new User('', 0, '');

  constructor(private router: Router) {}

  submitUser() {
    this.userList.push(this.userModel);
    this.userModel = new User('', 0, '');
  }

  showUserDetails() {
    const data = JSON.stringify(this.userList);
    this.router.navigate(['/userdetails', { data }]);
  }
}
