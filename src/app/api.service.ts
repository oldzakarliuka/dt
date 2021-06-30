import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEUrl = 'http://localhost:8080/api/v1';

  constructor(
    private readonly http: HttpClient,
  ) { }

  updateConfig(config: any, token: string) {
    return this.http.post(`${this.BEUrl}/franchazy/edit_config`, config, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'authorization': token
      })
    })
  }
}
