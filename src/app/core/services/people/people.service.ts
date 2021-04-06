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
  get(): Observable<Person[]> {
    this.logger.debug(`[PeopleService.get]`);
    const url = `${environment.httpBaseEndpoint}/people`;
    return this.httpClient.get<Person[]>(url).pipe(
      tap(response => this.logger.info(`Received ${response.length} people`)),
      catchError((error: any, caught: Observable<Person[]>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }

  getAll(offset: number, limit: number): Observable<PersonPagedModel> {
    this.logger.debug(`[PeopleService.getAll] Offser=${offset}, limit=${limit}`);
    if (offset < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Observable<PersonPagedModel>;
    }
    if (limit <= 0) {
      this.logger.error('Limit can not be less or equal to zero');
      return {} as Observable<PersonPagedModel>;
    }
    const url = `${environment.httpBaseEndpoint}/people/?offset=${offset}&limit=${limit}`;
    return this.httpClient.get<PersonPagedModel>(url).pipe(
      tap(response => this.logger.info(`Received ${response.people?.length ?? 0} people`)),
      catchError((error: any, caught: Observable<PersonPagedModel>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }

  getById(id: number): Observable<Person> {
    this.logger.debug(`[PeopleService.getById] Id=${id}`);
    if (id < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Observable<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}`;
    return this.httpClient.get<Person>(url).pipe(
      tap(result => this.logger.info(`Received ${JSON.stringify(result)} person`)),
      catchError((error: any, caught: Observable<Person>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }

  create(model: PersonCreateModel): Observable<Person> {
    this.logger.debug(`[PeopleService.create] model=${{ ...model }}`);
    if (!this.validation.createModelIsValid(model)) {
      this.logger.error('Person create model is invalid');
      return {} as Observable<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people/create`;
    return this.httpClient.post<Person>(url, model).pipe(
      tap(result => this.logger.info(`Received ${JSON.stringify(result)} created person`)),
      catchError((error: any, caught: Observable<Person>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }

  update(id: number, model: PersonUpdateModel): Observable<Person> {
    this.logger.debug(`[PeopleService.update] model=${{ ...model }}`);
    if (!this.validation.updateModelIsValid(model)) {
      this.logger.error('Person update model is invalid');
      return {} as Observable<Person>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}/update`;
    return this.httpClient.put<Person>(url, model).pipe(
      tap(result => this.logger.info(`Received ${JSON.stringify(result)} updated person`)),
      catchError((error: any, caught: Observable<Person>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }

  delete(id: number): Observable<{}> {
    this.logger.debug(`[PeopleService.delete] Id=${id}`);
    if (id < 0) {
      this.logger.error('Offset can not be less then zero');
      return {} as Observable<{}>;
    }
    const url = `${environment.httpBaseEndpoint}/people/${id}/delete`;
    return this.httpClient.delete(url).pipe(
      catchError((error: any, caught: Observable<{}>) => {
        this.logger.error(error);
        return caught;
      })
    );
  }
}
