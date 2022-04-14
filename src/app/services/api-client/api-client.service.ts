import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';

const requestUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  getDataList(): Observable<Category[]> {
    const url = `${requestUrl}/data`;
    return this.http.get<Category[]>(url);
  }

  getDataItem(id: number): Observable<Category> {
    const url = `${requestUrl}/data/${id}`;
    return this.http.get<Category>(url);
  }

  updateItemIsActive(id: number, newValue: boolean): Observable<any> {
    const url = `${requestUrl}/data/${id}`;
    return this.http.patch(url, { isActive: newValue });
  }
}
