import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';
import { CategorySearchBarComponent } from './category-search-bar/category-search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryItemComponent } from './category-item/category-item.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent,
    CategorySearchBarComponent,
    CategoryItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class CategoryModule {}
