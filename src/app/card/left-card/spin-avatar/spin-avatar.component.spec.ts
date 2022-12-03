import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinAvatarComponent } from './spin-avatar.component';

describe('SpinAvatarComponent', () => {
  let component: SpinAvatarComponent;
  let fixture: ComponentFixture<SpinAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
