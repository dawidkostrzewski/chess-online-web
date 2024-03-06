import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToFriendsNotificationComponent } from './invite-to-friends-notification.component';

describe('InviteToFriendsNotificationComponent', () => {
  let component: InviteToFriendsNotificationComponent;
  let fixture: ComponentFixture<InviteToFriendsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InviteToFriendsNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteToFriendsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
