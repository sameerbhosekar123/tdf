import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './components/emp/list-component/list-component.component';
import { AddComponentComponent } from './components/emp/add-component/add-component.component';

const routes: Routes = [
    { path: '', component: ListComponentComponent },
    { path: 'add', component: AddComponentComponent },
    { path: 'list', component: ListComponentComponent },
    { path: 'add/:id', component: AddComponentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
