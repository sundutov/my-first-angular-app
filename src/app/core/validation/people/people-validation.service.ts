import { Injectable } from '@angular/core';
import PersonCreateModel from '../../models/people/person.create.model';
import PersonUpdateModel from '../../models/people/person.update.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleValidationService {

  constructor() { }

  createModelIsValid(model: PersonCreateModel): boolean {
    if (!model.firstName.trim() || model.firstName.length < 2 || model.firstName.length > 30) { return false; }
    if (!model.lastName.trim() || model.lastName.length < 2 || model.lastName.length > 30) { return false; }
    if (model.age !== undefined && (model.age < 1 || model.age > 120)) { return false; }
    if (model.birthday !== undefined && (model.birthday < new Date(1900, 1, 1) || model.birthday > new Date())) { return false; }
    if (model.profession?.trim() && (model.profession.length < 2 || model.profession.length > 30)) { return false; }
    return true;
  }

  updateModelIsValid(model: PersonUpdateModel): boolean {
    if (model.id < 0) { return false; }
    return this.createModelIsValid(model);
  }
}
