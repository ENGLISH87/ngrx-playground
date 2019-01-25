import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { SmartComponent } from './components/smart/smart.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './components/route-a/route-a.component';
import { RouteBComponent } from './components/route-b/route-b.component';
import { InterstitialComponent } from './components/interstitial/interstitial.component';
import { StateModule } from './state/state.module';
import { ErrorComponent } from './components/error/error.component';

const APP_ROUTES: Routes = [
  { path: '', component: InterstitialComponent },
  { path: 'route-a', component: RouteAComponent },
  { path: 'route-b', component: RouteBComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent,
    RouteAComponent,
    RouteBComponent,
    InterstitialComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
