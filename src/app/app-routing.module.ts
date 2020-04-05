import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category-component/category/category.component';
import { MealComponent } from './components/meal-component/meal/meal.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'meals', component: MealComponent },
  { path: 'category', component: CategoryComponent },
  { path: ' ', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
