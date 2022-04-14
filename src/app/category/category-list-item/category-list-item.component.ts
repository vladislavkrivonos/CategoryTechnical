import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss'],
})
export class CategoryListItemComponent implements OnInit {
  @Input()
  item!: Category;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  onActiveChange(newValue: boolean) {
    this.dataService
      .updateItemIsActive(this.item.id, newValue)
      .subscribe((res) => console.log(res));
  }

  onClick() {
    this.router.navigate([`/${this.item.id}`]);
  }
}
