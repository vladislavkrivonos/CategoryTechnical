import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: ':id',
    component: CategoryItemComponent,
  },
  {
    path: '**',
    component: CategoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
