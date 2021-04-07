import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoggerService } from '../logger/logger.service';
import Person from '../../models/people/person';
import PersonCreateModel from '../../models/people/person.create.model';
import PersonUpdateModel from '../../models/people/person.update.model';
import PersonPagedModel from '../../models/people/people.paged.model';
import { PeopleValidationService } from '../../validation';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  httpOptions = {

  };
  constructor(private httpClient: HttpClient, private logger: LoggerService, private validation: PeopleValidationService) { }

  // todo: remove later(only for development)
  async get(): Promise<Person[]> {
    this.logger.debug(`[PeopleService.get]`);
    const url = `${environment.httpBaseEndpoint}/people`;
    return this.httpClient.get<Person[]>(url).toPromise();
  }

  getAll(offset: number, limit: number): Promise<PersonPagedModel> {
    this.logger.debug(`[PeopleService.getAll] Offser=${offset}, limit=${limit}`);
    if (offset < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Promise<PersonPagedModel>;
    }
    if (limit <= 0) {
      this.logger.error('Limit can not be less or equal to zero');
      return {} as Promise<PersonPagedModel>;
    }
    const url = `${environment.httpBaseEndpoint}/people/?offset=${offset}&limit=${limit}`;
    return this.httpClient.get<PersonPagedModel>(url).toPromise();
  }

  getById(id: number): Promise<Person> {
    this.logger.debug(`[PeopleService.getById] Id=${id}`);
    if (id < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Promise<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}`;
    return this.httpClient.get<Person>(url).toPromise();
  }

  create(model: PersonCreateModel): Promise<Person> {
    this.logger.debug(`[PeopleService.create] model=${{ ...model }}`);
    if (!this.validation.createModelIsValid(model)) {
      this.logger.error('Person create model is invalid');
      return {} as Promise<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people`;
    return this.httpClient.post<Person>(url, model).toPromise();
  }

  update(id: number, model: PersonUpdateModel): Promise<Person> {
    this.logger.debug(`[PeopleService.update] model=${{ ...model }}`);
    if (!this.validation.updateModelIsValid(model)) {
      this.logger.error('Person update model is invalid');
      return {} as Promise<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}/update`;
    return this.httpClient.put<Person>(url, model).toPromise();
  }

  delete(id: number): Promise<{}> {
    this.logger.debug(`[PeopleService.delete] Id=${id}`);
    if (id < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Promise<{}>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}/delete`;
    return this.httpClient.delete(url).toPromise();
  }
}
