import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInvitesComponent } from './game-invites.component';

describe('GameInvitesComponent', () => {
  let component: GameInvitesComponent;
  let fixture: ComponentFixture<GameInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameInvitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
