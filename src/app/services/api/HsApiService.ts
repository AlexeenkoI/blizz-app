import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ListGridInterface} from '../../hearthstone/card-list/ListGridInterface';

@Injectable()
export class HsApiService {
  url = 'http://localhost:9000/api/hearthstone';

  constructor(private client: HttpClient) {}

  fetchMetaData(query: [] = []) {
    const params = new HttpParams();
    return this.client.get(`${this.url}/metadata`, {
        params,
        responseType: 'json',
        headers: {
          Accept: 'application/json'
        }
      });
  }

  fetchCards(): Observable<ListGridInterface>{
    return this.client.get<ListGridInterface>(`${this.url}/cards`, {
      responseType: 'json',
      headers: {
        Accept: 'application/json'
      }
    });
  }
}
