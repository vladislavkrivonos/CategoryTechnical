import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { ApiClientService } from '../api-client/api-client.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly data: Subject<Category[]> = new Subject<Category[]>();

  private storedData: Category[] = [];
  private showOnlyActive!: boolean;
  private searchText!: string;

  constructor(private apiClient: ApiClientService) {}

  init() {
    if (this.storedData.length) return;

    this.apiClient.getDataList().subscribe((res) => {
      this.data.next(res);
      this.storedData = res;
    });
  }

  filterSearch(text: string) {
    this.searchText = text;

    this.updateData();
  }

  filterShowOnlyActive(show: boolean) {
    this.showOnlyActive = show;

    this.updateData();
  }

  getDataItem(id: number): Observable<Category> {
    return this.apiClient.getDataItem(id);
  }

  updateItemIsActive(id: number, newValue: boolean): Observable<any> {
    const element = this.storedData.find((x) => x.id === id);

    return this.apiClient.updateItemIsActive(id, newValue).pipe(
      tap(() => {
        if (element) {
          element.isActive = newValue;
        }

        this.data.next(this.storedData);
      })
    );
  }

  private updateData() {
    this.data.next(
      this.storedData // Two filters to keep modularity in case of extension
        .filter(
          (x) =>
            !this.searchText ||
            x.pageTitle.toLowerCase().includes(this.searchText.toLowerCase())
        )
        .filter((x) => !this.showOnlyActive || x.isActive)
    );
  }
}
