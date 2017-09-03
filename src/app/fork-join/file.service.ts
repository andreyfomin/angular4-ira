import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FileService {
  private empUrl = 'http://localhost:3000/employees';
  private customersUrl = 'http://localhost:3000/customers';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.empUrl)
              .map((res: Response) => res.json());
  }

  getBothFiles() {
    return Observable.forkJoin(
      this.http.get(this.empUrl)
        .map((res: Response) => res.json()),
      this.http.get(this.customersUrl)
        .map((res: Response) => res.json())
    );
  }
}
