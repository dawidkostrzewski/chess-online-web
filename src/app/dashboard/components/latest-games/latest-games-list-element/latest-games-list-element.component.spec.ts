import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGamesListElementComponent } from './latest-games-list-element.component';

describe('LatestGamesListElementComponent', () => {
  let component: LatestGamesListElementComponent;
  let fixture: ComponentFixture<LatestGamesListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestGamesListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestGamesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
