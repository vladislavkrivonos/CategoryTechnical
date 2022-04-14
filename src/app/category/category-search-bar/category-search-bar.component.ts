import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-category-search-bar',
  templateUrl: './category-search-bar.component.html',
  styleUrls: ['./category-search-bar.component.scss'],
})
export class CategorySearchBarComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input!: ElementRef;

  showOnlyActive!: boolean;

  private currentSearch = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          const value = this.input.nativeElement.value;

          if (value === this.currentSearch) return;

          this.currentSearch = value;

          this.dataService.filterSearch(value);
        })
      )
      .subscribe();
  }

  onShowOnlyActiveChange(value: boolean) {
    this.dataService.filterShowOnlyActive(value);
  }
}
