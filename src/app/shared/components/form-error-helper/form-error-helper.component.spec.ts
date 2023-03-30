import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorHelperComponent } from './form-error-helper.component';

describe('FormErrorHelperComponent', () => {
  let component: FormErrorHelperComponent;
  let fixture: ComponentFixture<FormErrorHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormErrorHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
