import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddformComponent } from './product-addform.component';

describe('ProductAddformComponent', () => {
  let component: ProductAddformComponent;
  let fixture: ComponentFixture<ProductAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
