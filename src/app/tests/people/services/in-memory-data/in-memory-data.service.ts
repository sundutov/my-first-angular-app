import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import PersonPagedModel from 'src/app/core/models/people/people.paged.model';
import Person from 'src/app/core/models/people/person';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} {
    const people = [
      { id: 1, firstName: 'Oliver', lastName: 'Twist', age: 22, birthday: new Date(1990, 1, 1), profession: 'QA' },
      { id: 2, firstName: 'Sarah', lastName: 'Conor', age: 40, birthday: new Date(1981, 10, 11), profession: 'Killer' },
      { id: 3, firstName: 'Shwarz', lastName: 'Negger', age: 62, birthday: new Date(1950, 3, 7), profession: 'Bodyguard' }
    ];

    return { people };
  }

  genId(people: Person[]): number {
    return people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1;
  }
}
