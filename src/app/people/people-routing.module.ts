import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonComponent } from './components';
import { PeopleComponent } from './components/people/people.component';

const ROUTES = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }
