import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-read-jsonfile',
  template: `
    <div>
      <button (click)="httpRequest()">Get Emoloyees</button>
      <ul>
        <li *ngFor="let emp of employees">
          {{emp.name}}
        </li>
      </ul>
    </div>
  `
})
export class ReadJSONFileComponent implements OnInit {
  url = 'http://localhost:3000/users/list';
  employees = [];
  constructor(@Inject(Http) public http: Http) { }

  httpRequest() {
    this.http.get(this.url)
    .map(res => res.json())
    .subscribe(
      // this function runs on success
      data => this.employees = data,
      // this function runs on  error
      err => console.error(`error reading data: ${err}`),
      // this function runs on completion
      () => console.log(`employees = ${JSON.stringify(this.employees)}`)
    );
  }

  ngOnInit() {
  }
}
