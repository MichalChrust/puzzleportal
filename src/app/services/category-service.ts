import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Categories} from '../models/Categories';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {

  }


  // eslint-disable-next-line
  getCategories() {
    console.log('executed service "category-service" with method getCategories');
    // tslint:disable-next-line:ban-types
    return this.http.get<Array<Categories>>(`http://localhost:8081/categories`);
  }
}
