import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDropComponent } from './avatar-drop.component';

describe('AvatarDropComponent', () => {
  let component: AvatarDropComponent;
  let fixture: ComponentFixture<AvatarDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDropComponent]
    });
    fixture = TestBed.createComponent(AvatarDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
