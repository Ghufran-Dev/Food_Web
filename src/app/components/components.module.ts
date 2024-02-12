import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SearchComponent } from './search/search.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TagComponent } from './tag/tag.component';
import { CartComponent } from './cart/cart.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    DetailPageComponent,
    TagComponent,
    CartComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
