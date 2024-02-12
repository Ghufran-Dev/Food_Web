import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TagComponent } from './tag/tag.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm', component: HomeComponent
  },
  {
    path: 'tag/:tag', component: HomeComponent
  },
  {
    path: 'food/:id', component: DetailPageComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
