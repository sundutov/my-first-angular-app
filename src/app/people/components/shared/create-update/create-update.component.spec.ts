import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from 'src/app/core';

import { CreateUpdateComponent } from './create-update.component';

describe('CreateUpdateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [CreateUpdateComponent],
      providers: [PeopleService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CreateUpdateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button be disabled', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', () => {
    component.personFormGroup.controls.firstName.setValue('');
    component.personFormGroup.controls.lastName.setValue('');
    component.personFormGroup.controls.age.setValue('');
    component.personFormGroup.controls.birthday.setValue('');
    component.personFormGroup.controls.profession.setValue('');
    expect(component.personFormGroup.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.personFormGroup.controls.firstName.setValue('Serhio');
    component.personFormGroup.controls.lastName.setValue('Ramos');
    component.personFormGroup.controls.age.setValue(40);
    component.personFormGroup.controls.birthday.setValue('02/02/1980');
    component.personFormGroup.controls.profession.setValue('QA');
    expect(component.personFormGroup.valid).toBeTruthy();
  });

  it('form should be submitted', () => {
    spyOn(component, 'onSubmit');
    component.personFormGroup.controls.firstName.setValue('Serhio');
    component.personFormGroup.controls.lastName.setValue('Ramos');
    component.personFormGroup.controls.age.setValue(40);
    component.personFormGroup.controls.birthday.setValue('02/02/1980');
    component.personFormGroup.controls.profession.setValue('QA');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
