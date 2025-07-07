import { TestBed } from '@angular/core/testing';

import { MemberStatsService } from './member-stats.service';

describe('MemberStatsService', () => {
  let service: MemberStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
