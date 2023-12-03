import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentListComponent } from './recent-list.component';

describe('RecentListComponent', () => {
  let component: RecentListComponent;
  let fixture: ComponentFixture<RecentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentListComponent]
    });
    fixture = TestBed.createComponent(RecentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
