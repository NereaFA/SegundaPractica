import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBtnComponent } from './output-btn.component';

describe('OutputBtnComponent', () => {
  let component: OutputBtnComponent;
  let fixture: ComponentFixture<OutputBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
