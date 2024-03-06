import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendInvitesComponent } from './friend-invites.component';

describe('FriendInvitesComponent', () => {
  let component: FriendInvitesComponent;
  let fixture: ComponentFixture<FriendInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendInvitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
