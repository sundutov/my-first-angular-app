import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../tests/people/services/in-memory-data/in-memory-data.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    // todo: remove later(only for development)
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, apiBase: '/' })
  ],
  exports: []
})
export class CoreModule { }
