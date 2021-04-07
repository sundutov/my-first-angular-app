import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService, PeopleService } from 'src/app/core';
import Person from 'src/app/core/models/people/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person?: Person;

  constructor(private route: ActivatedRoute, private personsService: PeopleService, private logger: LoggerService) { }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const personId = Number(routeParams.get('id'));
    try {
      this.person = await this.personsService.getById(personId);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
