export interface Meal {
    _id: string;
    nameMeal: string;
    quantity: number;
    photoMeal: string;
    priceMeal: number;
    allergies: Allergy[];
    items: Items[];
    extras: Extras[];
    status: string;
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

  export interface Allergy {
    _id: string;
    nameAllergy: string;
    numberAllergy: Number;
  }
  