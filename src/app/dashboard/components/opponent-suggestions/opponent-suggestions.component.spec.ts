import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentSuggestionsComponent } from './opponent-suggestions.component';

describe('OpponentSuggestionsComponent', () => {
  let component: OpponentSuggestionsComponent;
  let fixture: ComponentFixture<OpponentSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpponentSuggestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpponentSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
