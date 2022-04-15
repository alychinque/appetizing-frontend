export interface IItems {
    _id: string;
    nameMeal: string;
    quantity: number;
    priceMeal: number;
    extras: IExtras[];
  }

  export interface IExtras {
    name: string;
  }
 
  