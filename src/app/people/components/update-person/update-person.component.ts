import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService, PeopleService } from 'src/app/core';
import Person from 'src/app/core/models/people/person';
import PersonCreateModel from 'src/app/core/models/people/person.create.model';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  person?: Person;
  constructor(private route: ActivatedRoute, private personsService: PeopleService, private router: Router,
              private logger: LoggerService) { }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const personId = Number(routeParams.get('id'));
    try {
      this.person = await this.personsService.getById(personId);
    } catch (error) {
      this.logger.error(`Can't get person with id=${personId} for update. ${error}`);
    }
  }

  onSubmit = (model: PersonCreateModel): void => {
    if (this.person) {
      this.personsService.update(this.person.id, { ...model, id: this.person.id });
      this.router.navigate(['', this.person.id]);
    }
  }
}
