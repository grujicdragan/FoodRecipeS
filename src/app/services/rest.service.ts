import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap, toArray } from 'rxjs/operators';
import { Meal } from '../models/meal.model';
import { environment } from '../../environments/environment';
import { CategoryComponent } from '../components/category-component/category/category.component';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getMeals() {
    return this.http.get<Meal>(environment.apiURL + "search.php?f=a").pipe(
      toArray<Meal>()
    );

  }

  getCategories() {
    return this.http.get<Categories>(environment.apiURL + "categories.php").pipe(
      toArray<Categories>()
    );
  }

}
