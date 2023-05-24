import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVuploadedComponent } from './cvuploaded.component';

describe('CVuploadedComponent', () => {
  let component: CVuploadedComponent;
  let fixture: ComponentFixture<CVuploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVuploadedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVuploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
