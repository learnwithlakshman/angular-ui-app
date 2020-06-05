import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbookhomeComponent } from './cbookhome.component';

describe('CbookhomeComponent', () => {
  let component: CbookhomeComponent;
  let fixture: ComponentFixture<CbookhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbookhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
