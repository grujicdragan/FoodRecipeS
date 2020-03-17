import { Component, OnInit, TemplateRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from 'src/app/models/meal.model';
import {  RestService } from '../../../services/rest.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';



@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  p: number = 1;
  public meals: Meal[];
  modalRef: BsModalRef;
  modalRef2: BsModalRef;

  constructor(
    private http: HttpClient,
    private service: RestService,
    private modalService: BsModalService) { 
  }

  ngOnInit(): void {


    this.service.getMeals().subscribe(data=> {
      console.log(data);
      this.meals = data}) 
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
}
