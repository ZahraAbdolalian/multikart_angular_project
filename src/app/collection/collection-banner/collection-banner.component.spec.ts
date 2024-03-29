import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBannerComponent } from './collection-banner.component';

describe('CollectionBannerComponent', () => {
  let component: CollectionBannerComponent;
  let fixture: ComponentFixture<CollectionBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionBannerComponent]
    });
    fixture = TestBed.createComponent(CollectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
