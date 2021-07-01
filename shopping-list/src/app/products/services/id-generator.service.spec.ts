import {TestBed} from '@angular/core/testing';

import {IgGeneratorService} from './id-generator.service';

describe('IgGeneratorService', () => {
  let service: IgGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
