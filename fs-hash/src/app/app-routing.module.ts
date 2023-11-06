import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FsHashComponent } from './fs-hash/fs-hash.component';

const routes: Routes = [
  { path: '', redirectTo: '/fs-hash', pathMatch: 'full' }, // Redirect to '/fs-hash' by default
  { path: 'fs-hash', component: FsHashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
