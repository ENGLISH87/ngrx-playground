import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './store/reducers/root.reducer';
import { SmartComponent } from './components/smart/smart.component';
import { EffectsModule } from '@ngrx/effects';
import { QuoteEffects } from './store/effects/quote.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './components/route-a/route-a.component';
import { RouteBComponent } from './components/route-b/route-b.component';

const APP_ROUTES: Routes = [
  { path: '', component: RouteAComponent },
  { path: 'test', component: RouteBComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent,
    RouteAComponent,
    RouteBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Playground',
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([QuoteEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
