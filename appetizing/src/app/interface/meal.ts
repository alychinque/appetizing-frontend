export interface Meal {
    _id: string;
    nameMeal: string;
    quantity: number;
    priceMeal: number;
    items: Items[];
    extras: Extras[];
  }

  export interface Extras {
    _id: string;
    nameItem: string;
    checked: boolean;
  }
 
  export interface Items {
    _id: string;
    nameItem: string;
  }
  