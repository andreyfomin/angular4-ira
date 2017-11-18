import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('call ThirdComponent constructor!');
    console.log(this.route.snapshot.params);
  }

  ngOnInit() {
  }

}
