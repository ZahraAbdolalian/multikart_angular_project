import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFilterComponent } from './collection-filter.component';

describe('CollectionFilterComponent', () => {
  let component: CollectionFilterComponent;
  let fixture: ComponentFixture<CollectionFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionFilterComponent]
    });
    fixture = TestBed.createComponent(CollectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
