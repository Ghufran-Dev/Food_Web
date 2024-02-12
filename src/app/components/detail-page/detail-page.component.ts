import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
food:any
constructor(activated:ActivatedRoute, private food_service:FoodService){
activated.params.subscribe((params)=>{
  if(params['id']){
    this.food = this.food_service.getFoodById(params['id'])
  }
})
}

ngOnInit(): void {
  
}
}
