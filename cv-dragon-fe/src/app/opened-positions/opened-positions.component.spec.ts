import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedPositionsComponent } from './opened-positions.component';

describe('OpenedPositionsComponent', () => {
  let component: OpenedPositionsComponent;
  let fixture: ComponentFixture<OpenedPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedPositionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenedPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
