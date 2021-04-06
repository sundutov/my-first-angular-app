import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from 'src/app/core';
import { CreateUpdateComponent } from '../shared/create-update/create-update.component';

import { UpdatePersonComponent } from './update-person.component';

describe('UpdatePersonComponent', () => {
  let component: UpdatePersonComponent;
  let fixture: ComponentFixture<UpdatePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [UpdatePersonComponent, CreateUpdateComponent],
      providers: [PeopleService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
