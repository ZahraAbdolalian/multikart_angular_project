import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopTrendingComponent } from './home-top-trending.component';

describe('HomeTopTrendingComponent', () => {
  let component: HomeTopTrendingComponent;
  let fixture: ComponentFixture<HomeTopTrendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopTrendingComponent]
    });
    fixture = TestBed.createComponent(HomeTopTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
