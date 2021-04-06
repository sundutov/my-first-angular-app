import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core';
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

  constructor(private personsService: PeopleService) { }

  ngOnInit(): void {
    this.personsService.get().subscribe({ next: p => this.people = p });
  }
}
