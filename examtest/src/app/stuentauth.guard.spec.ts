import { TestBed } from '@angular/core/testing';

import { StuentauthGuard } from './stuentauth.guard';

describe('StuentauthGuard', () => {
  let guard: StuentauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StuentauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
