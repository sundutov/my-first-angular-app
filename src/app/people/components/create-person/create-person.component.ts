import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/core';

import PersonCreateModel from 'src/app/core/models/people/person.create.model';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  constructor(public personsService: PeopleService, private router: Router) { }

  onSubmit(person: PersonCreateModel): void {
    this.personsService.create(person).subscribe({ next: _ => this.router.navigate(['']) });
  }
}
