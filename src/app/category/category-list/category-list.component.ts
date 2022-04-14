import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  isReady!: boolean;
  data: Category[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.init();

    this.dataService.data.subscribe((newData) => {
      this.data = newData;

      this.isReady = true;
    });
  }
}
