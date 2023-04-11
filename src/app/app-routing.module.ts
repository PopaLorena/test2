import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/invertory/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { InvertoryComponent } from './pages/invertory/invertory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', component: InvertoryComponent },
  //{ path: 'createItem', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
