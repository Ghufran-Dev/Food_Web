import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 foods!:Food[]
  constructor(private food_service:FoodService, activated:ActivatedRoute){
    activated.params.subscribe((params)=>{
      if (params['searchTerm']){
        this.foods = this.food_service.getAllBySearch(params['searchTerm'])
      }else if(params['tag']){
        this.foods = this.food_service.getAllFoodByTag(params['tag'])
      }
      else{
        this.foods = this.food_service.getAll()
      }
    })
  }
  
  ngOnInit(): void {
  }

}
