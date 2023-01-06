import { Component } from '@angular/core';
import { User, userList, updateUserList, addUser } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  public courseHasError = true;
  public ageHasError = true;

  public userListItem = userList;
  public courses = ['BSc', 'BCom', 'BCA', 'BEd', 'BBA'];
  public userModel;

  constructor() {}

  ngOnInit() {
    this.userModel = new User();

    if (!userList.length && localStorage.getItem('userList')) {
      let persisted = JSON.parse(localStorage.getItem('userList'));
      updateUserList(persisted);
    }
  }

  submitUser(form: NgForm) {
    let { name, email, age, course } = this.userModel;
    addUser({ name, email, age, course });
    form.resetForm();
    this.userModel = new User();

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    // This is not an optimized one at the moment
    localStorage.setItem('userList', JSON.stringify(this.userListItem));
  }

  isValidCourse(value) {
    if (value === 'default') {
      this.courseHasError = true;
    } else {
      this.courseHasError = false;
    }
  }

  isValidAge(value) {
    this.ageHasError = !(value >= 20 && value <= 55);
  }
}
