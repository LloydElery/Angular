import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //json placeholder
  private url = 'http://';
  // Hämta api
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    //
    // Hämta data från api
    return this.httpClient.get(this.url);
  }
}
