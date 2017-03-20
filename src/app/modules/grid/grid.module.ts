import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotTableModule } from 'ng2-handsontable/index';

import { GridRoutingModule } from './grid-routing.module';
import { GridSimpleComponent } from './components/grid-simple/grid-simple.component';

@NgModule({
  imports: [
    CommonModule,
    GridRoutingModule,
    HotTableModule
  ],
  declarations: [ GridSimpleComponent ]
})
export class GridModule { }
