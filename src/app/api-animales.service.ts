import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAnimalesService {

  private apiUrl = "http://localhost:8000/api/v1";

  constructor(private http: HttpClient) { }

  getAnimales() {
    return this.http.get(this.apiUrl + "/animal");
  }

  createAnimal(animal: any){
    return this.http.post(this.apiUrl + "/animal", animal);

  }
}
