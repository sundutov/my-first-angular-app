import { Component, OnInit } from '@angular/core';
import { LoggerService, PeopleService } from 'src/app/core';
import PersonPagedModel from 'src/app/core/models/people/people.paged.model';
import Person from 'src/app/core/models/people/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  offset = 0;
  limit = 10;
  people?: Person[];

  constructor(private personsService: PeopleService, private logger: LoggerService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.people = await this.personsService.get();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
