export interface IRestaurant {
  blurhash: string;
  launch_date: string;
  location: number[];
  name: string;
  online: boolean;
  popularity: number;
}

export interface ISection {
  title: string;
  restaurants: IRestaurant[];
}
