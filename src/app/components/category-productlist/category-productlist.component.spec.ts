import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductlistComponent } from './category-productlist.component';

describe('CategoryProductlistComponent', () => {
  let component: CategoryProductlistComponent;
  let fixture: ComponentFixture<CategoryProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProductlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
