import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProductComponent } from './tab-product.component';

describe('TabProductComponent', () => {
  let component: TabProductComponent;
  let fixture: ComponentFixture<TabProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabProductComponent]
    });
    fixture = TestBed.createComponent(TabProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
