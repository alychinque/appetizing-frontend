import { Drink } from "./drink";
import { Meal } from "./meal";

export interface Order {
    _id: string;
    tableNumber: string;
    userIdOrder: string;
    mealOrder: Meal;
    drinkOrder: Drink;
    extraOrder: Extras[];
    priceOrder: number;
  }

  export interface Extras {
    _id: string;
    nameItem: string;
    checked: boolean;
  }