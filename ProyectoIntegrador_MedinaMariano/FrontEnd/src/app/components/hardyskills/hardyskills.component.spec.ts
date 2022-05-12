import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardyskillsComponent } from './hardyskills.component';

describe('HardyskillsComponent', () => {
  let component: HardyskillsComponent;
  let fixture: ComponentFixture<HardyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardyskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
