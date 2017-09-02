import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css']
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
