import {TestBed, inject} from '@angular/core/testing';
import {ContactDataService} from './contact-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('ContactDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([ContactDataService], (service: ContactDataService) => {
    expect(service).toBeTruthy();
  }));

});
