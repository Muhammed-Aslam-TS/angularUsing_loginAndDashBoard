import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBsrComponent } from './side-bsr.component';

describe('SideBsrComponent', () => {
  let component: SideBsrComponent;
  let fixture: ComponentFixture<SideBsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBsrComponent]
    });
    fixture = TestBed.createComponent(SideBsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
