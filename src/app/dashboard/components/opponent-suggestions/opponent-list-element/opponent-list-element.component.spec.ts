import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentListElementComponent } from './opponent-list-element.component';

describe('OpponentListElementComponent', () => {
  let component: OpponentListElementComponent;
  let fixture: ComponentFixture<OpponentListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpponentListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpponentListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
