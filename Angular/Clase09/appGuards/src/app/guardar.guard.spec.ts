import { TestBed, async, inject } from '@angular/core/testing';

import { GuardarGuard } from './guardar.guard';

describe('GuardarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardarGuard]
    });
  });

  it('should ...', inject([GuardarGuard], (guard: GuardarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
