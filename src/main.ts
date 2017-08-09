import { enableProdMode } from '@angular/core'; /*it specifies that we import that module from angular core library */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; /*enables to bootstrap your angular application by taking as a parametres */

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
