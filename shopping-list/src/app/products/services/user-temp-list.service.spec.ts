import {TestBed} from '@angular/core/testing';

import {UserTempListService} from './user-temp-list.service';

describe('UserTempListService', () => {
  let service: UserTempListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTempListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
