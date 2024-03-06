import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToGameNotificationComponent } from './invite-to-game-notification.component';

describe('InviteToGameNotificationComponent', () => {
  let component: InviteToGameNotificationComponent;
  let fixture: ComponentFixture<InviteToGameNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteToGameNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteToGameNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
