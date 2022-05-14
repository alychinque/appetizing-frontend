import { Drink } from "./drink";
import { Meal } from "./meal";

export interface Order {
    _id: string;
    tableNumber: Number;
    userIdOrder: string;
    mealOrder: Meal;
    drinkOrder: Drink;
    extraOrder: Extras[];
    priceOrder: Number;
    dateOrder: string;
    status: string;
  }

  export interface Extras {
    _id: string;
    nameItem: string;
    checked: boolean;
  }