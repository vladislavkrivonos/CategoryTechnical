import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  isReady!: boolean;

  item!: Category;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getDataItem(this.route.snapshot.params['id'])
      .subscribe((res) => {
        this.item = res;

        this.isReady = true;
      });
  }

  onActiveChange(newValue: boolean) {
    this.dataService
      .updateItemIsActive(this.item.id, newValue)
      .subscribe((res) => console.log(res));
  }
}
