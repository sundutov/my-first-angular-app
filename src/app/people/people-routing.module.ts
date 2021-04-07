import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatePersonComponent, PersonComponent, UpdatePersonComponent } from './components';
import { PeopleComponent } from './components/people/people.component';

const ROUTES = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/add', component: CreatePersonComponent },
  { path: 'people/:id', component: PersonComponent },
  { path: 'people/:id/update', component: UpdatePersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }
