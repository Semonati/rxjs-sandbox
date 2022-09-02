import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { CreatOperatorsComponent } from './components/creat-operators/creat-operators.component';
import { PipeOperatorsComponent } from './components/pipe-operators/pipe-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatOperatorsComponent,
    PipeOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
