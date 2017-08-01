import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';


export function getWikiService($injector) {
    return $injector.get('Wikipedia');
}

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular-hybrid directives
    UIRouterUpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterModule,
    // This forChild module registers the contacts future state and enables the lazy loaded contacts module
    // UIRouterModule.forChild({ states: [contactsFutureState] }),
  ],
  providers: [
    // Register some AngularJS services as Angular providers
    { provide: 'Wikipedia', deps: ['$injector'], useFactory: getWikiService }
  ]
})
export class SampleAppModuleAngular {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}
