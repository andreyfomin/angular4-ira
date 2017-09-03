import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';

@Component({
  selector: 'app-fork-join',
  template: `
    <h2>Angular 4 HTTP and Observables</h2>
    <h3>Some of our Employees</h3>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.fname }} {{ emp.lname }} lives in {{emp.city}}
      </li>
    </ul>
    <h3>Some of our Customers</h3>
    <ul>
      <li *ngFor="let cust of customers">
        {{ cust.fname }} {{ cust.lname }} lives in {{ cust.city }}
      </li>
    </ul>
  `
})
export class ForkJoinComponent implements OnInit {
  public employees;
  public customers;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getBothFiles();
  }

  getBothFiles() {
    this.fileService.getBothFiles().subscribe(
      data => {
        this.customers = data[0];
        this.employees = data[1];
      }
      // error/completion callbackes are optional, and console
      // messages appear if the Observable is in an error state
    );
  }
}
