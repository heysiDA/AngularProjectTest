import { TestBed, inject } from '@angular/core/testing';

import { CountryDescriptionService } from './country-description.service';

describe('CountryDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryDescriptionService]
    });
  });

  it('should be created', inject([CountryDescriptionService], (service: CountryDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
