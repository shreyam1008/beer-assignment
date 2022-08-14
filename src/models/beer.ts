export interface Ingredients {
  hops: {
    name: string;
  }[];
  malt: {
    name: string;
  }[];
  yeast: string;
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  ingredients: Ingredients;
}
export interface BeerRequestParams {
  page?: number;
  per_page?: number;
  beer_id?: number;
  beer_name?: string;
  brewed_before?: string;
  brewed_after?: string;
  hops?: string;
  malt?: string;
  food?: string;
  yeast?: string;
}
