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

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Playground',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([QuoteEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
