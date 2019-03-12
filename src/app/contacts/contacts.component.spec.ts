import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../api-mock.service';
import { ContactDataService } from '../contact-data.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsComponent],
      providers: [
        ContactDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              contacts: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
