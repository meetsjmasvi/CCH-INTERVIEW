import { Component } from '@angular/core';
import { userList } from '../user';

@Component({
  selector: 'app-user-details',
  template: `
    <div>
      <h3>Display user details in Table</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userList">
            <th scope="row">{{ user.name }}</th>
            <td>{{ user.age }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.course }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [],
})
export class UserDetailsComponent {
  public userList = [];
  constructor() {}

  ngOnInit() {
    this.userList = userList;
  }
}
