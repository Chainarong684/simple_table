import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<News> {
    return this.http.get<News>(
      'http://dev-sw6-uapi.ecm.in.th/uapi/drt-ElectronicsDocument/ED-GetNews?EmployeeId=3'
    );
  }

  updateStatusByNewsId(body: any): Observable<any> {
    return this.http.post<any>(
      'http://dev-sw6-uapi.ecm.in.th/uapi/drt-ElectronicsDocument/ED-UpdateStatusNews',
      body
    );
  }
}
