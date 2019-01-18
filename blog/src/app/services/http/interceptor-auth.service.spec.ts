import { TestBed } from '@angular/core/testing';
import {HttpIntercepterBasicAuthService} from "./interceptor-auth.service";


describe('InterceptorAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterBasicAuthService = TestBed.get(HttpIntercepterBasicAuthService);
    expect(service).toBeTruthy();
  });
});
