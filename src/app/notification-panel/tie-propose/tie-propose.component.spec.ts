import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieProposeComponent } from './tie-propose.component';

describe('TieProposeComponent', () => {
  let component: TieProposeComponent;
  let fixture: ComponentFixture<TieProposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TieProposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TieProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
