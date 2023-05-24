import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruterComponent } from './recruter.component';

describe('RecruterComponent', () => {
  let component: RecruterComponent;
  let fixture: ComponentFixture<RecruterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
