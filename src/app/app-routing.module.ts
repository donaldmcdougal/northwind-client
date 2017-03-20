import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridModule } from './modules/grid/grid.module';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GridModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
