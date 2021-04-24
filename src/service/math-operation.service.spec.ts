import { TestBed } from '@angular/core/testing';

import { MathOperationService } from './math-operation.service';

describe('MathOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathOperationService = TestBed.get(MathOperationService);
    expect(service).toBeTruthy();
  });
});
