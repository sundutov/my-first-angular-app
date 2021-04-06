import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './components/people/people.component';
import { CommonModule } from '@angular/common';
import { CreatePersonComponent, CreateUpdateComponent, PersonComponent, UpdatePersonComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreatePersonComponent,
    PeopleComponent,
    PersonComponent,
    UpdatePersonComponent,
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PeopleRoutingModule
  ],
  exports: [
    CreatePersonComponent,
    PeopleComponent,
    PersonComponent,
    UpdatePersonComponent,
    CreateUpdateComponent
  ]
})
export class PeopleModule { }
