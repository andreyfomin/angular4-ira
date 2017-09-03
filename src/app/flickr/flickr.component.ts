import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-flickr',
  template: `
    <div>
      <button (click)="httpRequest()">Get Users</button>
      <ul>
        <li *ngFor="let user of users">
          {{user.name}}
        </li>
      </ul>
    </div>
  `
})
export class FlickrComponent implements OnInit {

  url = 'http://localhost:3000/users/list';
  users = [];

  constructor() { }

  httpRequest() {
    $.getJSON(
      this.url,
      (data) => {
        console.log(data);
        this.users = [...data];
      }
    );
  }

  ngOnInit() {
  }

}
