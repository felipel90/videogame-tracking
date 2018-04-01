import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ConsolesService {

  constructor(private http: HttpClient) { }

  getConsoleList(): Observable<any> {
    return this.http.get('./assets/data/console-list.json')
  }

}
