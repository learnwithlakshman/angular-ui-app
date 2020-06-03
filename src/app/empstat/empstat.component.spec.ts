import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpstatComponent } from './empstat.component';

describe('EmpstatComponent', () => {
  let component: EmpstatComponent;
  let fixture: ComponentFixture<EmpstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
