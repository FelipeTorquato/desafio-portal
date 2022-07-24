import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrachaDigitalComponent } from './cracha-digital.component';

describe('CrachaDigitalComponent', () => {
  let component: CrachaDigitalComponent;
  let fixture: ComponentFixture<CrachaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrachaDigitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrachaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
