import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
