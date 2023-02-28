interface Restaurant {
  category: string;
  name: string;
  distance?: number;
  menu?: string[];
}

class RestaurantList {
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }

  add(category: string, name: string, distance?: number, menu?: string[]) {}

  filterByCategory(category: string) {}
}
