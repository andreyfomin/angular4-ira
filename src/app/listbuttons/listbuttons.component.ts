import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbuttons',
  template: `
    <div>
    <input #fname>
      <button (click)="clickMe(fname.value)">
        ClickMe
      </button>
      <ul>
        <li *ngFor="let user of users">
          <button (click)="deleteMe(user)">
            Delete
          </button>
          {{user}}
        </li>
      </ul>
    </div>`
})
export class ListbuttonsComponent implements OnInit {
  users = ['Jane', 'Dave', 'Tom'];
  constructor() { }

  ngOnInit() {
  }

  deleteMe(user) {
    console.log('delete user = ' + user);
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  clickMe(user) {
    console.log('new user = ' + user);
    this.users.push(user);
    // if (user is non-null) {
    //   if (user is duplicated) {
    //     // display alert message
    //   } else {
    //     // display alert message
    //   }
    // } else {
    //   // display alert message
    // }
  }
}
