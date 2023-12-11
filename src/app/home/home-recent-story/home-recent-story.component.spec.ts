import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentStoryComponent } from './home-recent-story.component';

describe('HomeRecentStoryComponent', () => {
  let component: HomeRecentStoryComponent;
  let fixture: ComponentFixture<HomeRecentStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRecentStoryComponent]
    });
    fixture = TestBed.createComponent(HomeRecentStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
