import { Injectable } from '@angular/core';
import { sample_food, sample_tags } from 'src/data';
import { Food } from '../models/food';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(){
    return sample_food
  }
  //search
  getAllBySearch(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // get All Tag
  getAllTags():Tag[]{
    return sample_tags
  }
  // Get Food by tags
  getAllFoodByTag(tag:string):Food[]{
    
    return tag === "All"?this.getAll():this.getAll().filter(food=> food.tags.includes(tag))
    
  }

  getFoodById(id:string){
    return this.getAll().find(food => food.id == id)
  }
}
