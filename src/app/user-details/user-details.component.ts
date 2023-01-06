import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div>
      <h3>Display user details in Table</h3>
      <!-- Todo -->
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
        </tr>
        <tr *ngFor="let user of userList">
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.course }}</td>
        </tr>
      </table>
    </div>
  `,
  styles: [],
})
export class UserDetailsComponent {
  public userList = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const data = param.get('data');
      this.userList = JSON.parse(data);
    });
  }
}
