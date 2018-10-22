import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhimProfileComponent } from './khim-profile.component';

describe('KhimProfileComponent', () => {
  let component: KhimProfileComponent;
  let fixture: ComponentFixture<KhimProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhimProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhimProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
