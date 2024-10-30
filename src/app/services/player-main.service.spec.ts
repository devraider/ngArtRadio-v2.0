import { TestBed } from '@angular/core/testing';

import { PlayerMainService } from './player-main.service';

describe('PlayerMainService', () => {
  let service: PlayerMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
