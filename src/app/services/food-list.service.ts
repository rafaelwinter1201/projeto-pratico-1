import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private list: Array<string>  = [
    "x-Bacon",
    "Feijão",
    "Ovo"
  ]

  public foodList(){
    return this.list;
  }
  constructor() { }
}
