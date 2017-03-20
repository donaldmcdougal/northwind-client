import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import {EntityPage} from "../dtos/EntityPage";
import 'rxjs/add/operator/toPromise';

export abstract class NorthwindService extends BehaviorSubject<EntityPage>{

  private BASE_URL = "http://localhost:8080/";

  constructor(private http: Http, private tableName: string) {
    super(null);
  }

  /*
  public query(state: any): void {
    this.fetch(this.tableName, state)
      .subscribe(x => super.next(x));
  }
  */
  public query(state: any):Promise<Array<any>> {
    return this.fetch(this.tableName, state)
      .toPromise<EntityPage>()
      .then(response => response.entities)
  }

  private toStateString(state: any): string {
    if (state !== null) {
      var stateStr = '';
      if (state.page) {
        stateStr = `${stateStr}&page=${state.page}`;
      }
      if (state.pageSize) {
        stateStr = `${stateStr}&size=${state.pageSize}`;
      }
      if (state.sortType) {
        stateStr = `${stateStr}&sortType=${state.sortType}`;
      }
      return stateStr;
    } else {
      return '';
    }
  }

  private fetch(tableName: string, state: any): Observable<EntityPage> {
    const queryStr = `${tableName}${this.toStateString(state)}`;

    return this.http
      .get(`${this.BASE_URL}${queryStr}`)
      .map(response => response.json())
      .map(response => (<EntityPage>{
        entities: response._embedded[tableName],
        links: response._links,
        page: response.page
      }));
  }
}

@Injectable()
export class PrivilegesService extends NorthwindService {
  constructor(http: Http) { super(http, "privileges"); }
}

@Injectable()
export class ProductsService extends NorthwindService {
  constructor(http: Http) { super(http, "products"); }
}
