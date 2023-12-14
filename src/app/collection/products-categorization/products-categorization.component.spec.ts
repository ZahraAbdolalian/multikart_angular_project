import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategorizationComponent } from './products-categorization.component';

describe('ProductsCategorizationComponent', () => {
  let component: ProductsCategorizationComponent;
  let fixture: ComponentFixture<ProductsCategorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategorizationComponent]
    });
    fixture = TestBed.createComponent(ProductsCategorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
