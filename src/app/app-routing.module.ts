import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'', redirectTo:'', pathMatch:'full'
  },
  {
    path:'', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  // {
  //   path:'search/:searchTerm', component:HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
