import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridSimpleComponent } from "./components/grid-simple/grid-simple.component";

const routes: Routes = [
  {
    path: 'grid-simple', component: GridSimpleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
