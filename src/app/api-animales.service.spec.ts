import { TestBed } from '@angular/core/testing';

import { ApiAnimalesService } from './api-animales.service';

describe('ApiAnimalesService', () => {
  let service: ApiAnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
