import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedricComponent } from './cedric.component';

describe('CedricComponent', () => {
  let component: CedricComponent;
  let fixture: ComponentFixture<CedricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CedricComponent]
    });
    fixture = TestBed.createComponent(CedricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
