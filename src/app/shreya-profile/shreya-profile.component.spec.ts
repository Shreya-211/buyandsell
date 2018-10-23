import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyaProfileComponent } from './shreya-profile.component';

describe('ShreyaProfileComponent', () => {
  let component: ShreyaProfileComponent;
  let fixture: ComponentFixture<ShreyaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreyaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreyaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
