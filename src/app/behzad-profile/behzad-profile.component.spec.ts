import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehzadProfileComponent } from './behzad-profile.component';

describe('BehzadProfileComponent', () => {
  let component: BehzadProfileComponent;
  let fixture: ComponentFixture<BehzadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehzadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehzadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
