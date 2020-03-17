import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {  RestService } from '../../../services/rest.service';
import { Routes, RouterModule } from '@angular/router';
import { Categories } from 'src/app/models/categories.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories: Categories[];
  p: number = 1;


  constructor(
    private router: Router,
    private service: RestService,
    private http: HttpClient

    ) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => this.categories = data)
  }

}
