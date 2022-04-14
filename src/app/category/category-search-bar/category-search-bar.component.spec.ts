import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySearchBarComponent } from './category-search-bar.component';

describe('CategorySearchBarComponent', () => {
  let component: CategorySearchBarComponent;
  let fixture: ComponentFixture<CategorySearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
