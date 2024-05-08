import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditformComponent } from './product-editform.component';

describe('ProductEditformComponent', () => {
  let component: ProductEditformComponent;
  let fixture: ComponentFixture<ProductEditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductEditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
