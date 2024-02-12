import { Component } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
tags?:Tag[]
constructor(private api:FoodService){
  this.tags = api.getAllTags()
}
}
