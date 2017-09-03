import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { NYTService } from './nyt.service';

@Component({
  selector: 'app-search-nyt',
  template: `
    <div>
      <h2>List of Users</h2>
      <ul>
        <li *ngFor="let user of users">
          {{ user.name }}
        </li>
      </ul>
    </div>
  `
})
export class SearchNYTComponent implements OnInit {
  users: any;

  constructor(private nytService: NYTService) {
    const p = new Promise (
      resolve => {
        const value = nytService.getMYTinfo();
        resolve(value);
      }
    );

    // Option #1: process data from an Observable
    Observable.fromPromise(p)
    .subscribe(
      data => this.users = data,
      err => console.error(`error reading data: ${err}`)
    );

    // Option #2: process data from Promise
    // p.then(
    //   data => this.users = data
    // );
  }

  ngOnInit() {
  }

}
