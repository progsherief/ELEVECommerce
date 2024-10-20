import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient ,provideHttpClient,withFetch, withInterceptors} from '@angular/common/http';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),    
    provideHttpClient(withFetch(),
    withInterceptors([ errorsInterceptor,loadingInterceptor])),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom(NgxSpinnerModule )
    
   ]
};
