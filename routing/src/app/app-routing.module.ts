import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-B/child-b.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent, children: [
    { path: 'child-a/:id', component: ChildAComponent, data: { name: 'Alex'}},
    { path: 'child-b', component: ChildBComponent}
  ] },
  { path: 'second-component', component: SecondComponent },
  { path: '', redirectTo:'/first-component', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
