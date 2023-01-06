import { Component } from '@angular/core';
import { updateUserList } from '../user';

@Component({
  selector: 'app-settings',
  template: `
    <div>
      <h3>Settings</h3>
      <div>
        Clear local storage to clear reset user data
        <button (click)="clearUserData()">Clear</button>
      </div>
    </div>
  `,
  styles: [],
})
export class SettingsComponent {
  constructor() {}

  clearUserData() {
    localStorage.removeItem('userList');
    updateUserList([]);
  }
}
