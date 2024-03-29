import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService, PeopleService } from 'src/app/core';

import PersonCreateModel from 'src/app/core/models/people/person.create.model';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  constructor(public personsService: PeopleService, private router: Router, private logger: LoggerService) { }

  async onSubmit(person: PersonCreateModel): Promise<void> {
    try {
      await this.personsService.create(person);
    } catch (error) {
      this.logger.error(error);
    }

    this.router.navigate(['']);
  }
}
