import { TestBed, inject } from '@angular/core/testing';

import { CountryNewsService } from './country-news.service';

describe('CountryNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryNewsService]
    });
  });

  it('should be created', inject([CountryNewsService], (service: CountryNewsService) => {
    expect(service).toBeTruthy();
  }));
});
