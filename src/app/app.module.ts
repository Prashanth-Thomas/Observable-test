import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemsDataComponent } from './items-data/items-data.component';
import { ItemsListComponent } from './items-data/items-list/items-list.component';
import { ItemsImageComponent } from './items-data/items-image/items-image.component';
import {ItemsList} from './items-data/items.lsit.service/items.list.service';
import { ObserverTesComponent } from './observer-tes/observer-tes.component';
import { ObserverTes2Component } from './observer-tes2/observer-tes2.component';
import { ObserverTes3Component } from './observer-tes3/observer-tes3.component';
import { NumEmitterComponent } from './observer-tes3/num-emitter/num-emitter.component';
import { NumDisplayComponent } from './observer-tes3/num-emitter/num-display/num-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsDataComponent,
    ItemsListComponent,
    ItemsImageComponent,
    ObserverTesComponent,
    ObserverTes2Component,
    ObserverTes3Component,
    NumEmitterComponent,
    NumDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemsList],
  bootstrap: [AppComponent]
})
export class AppModule { }
