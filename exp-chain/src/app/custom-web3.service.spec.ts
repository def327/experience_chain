import { TestBed, inject } from '@angular/core/testing';

import { CustomWeb3Service } from './custom-web3.service';

describe('CustomWeb3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomWeb3Service]
    });
  });

  it('should be created', inject([CustomWeb3Service], (service: CustomWeb3Service) => {
    expect(service).toBeTruthy();
  }));
});
