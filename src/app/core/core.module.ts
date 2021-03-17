import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpAuthInterceptor } from './services/http-auth-interceptor';

const imports = [HttpClientModule];

const components = [];

const providers = [HttpAuthInterceptor];

@NgModule({
  imports: [...imports],
  declarations: [...components],
  exports: [...components, ...imports],
  providers: [...providers, { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }]
})
export class CoreModule { }
