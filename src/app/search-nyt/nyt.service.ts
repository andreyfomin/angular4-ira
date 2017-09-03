import $ from 'jquery';

export class NYTService {
  url = 'http://localhost:3000/users/list';

  constructor() { }

  getMYTinfo() {
    return  $.getJSON(
      this.url,
      data => data
    );
  }
}
