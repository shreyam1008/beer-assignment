export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
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

// {
//     "id": 275,
//     "name": "Sidewalk Shark",
//     "tagline": "Citrus-Infused German Sour.",
//     "first_brewed": "2017",
//     "description": "A citrus-infused gose - a traditional German sour wheat beer brewed with salt, in this case with the addition of kaffir lime leaf and lemon peel.",
//     "image_url": "https://images.punkapi.com/v2/keg.png",
//     "abv": 5.2,
//     "ibu": 22,
//     "target_fg": 1008,
//     "target_og": 1055,
//     "ebc": 7,
//     "srm": 4,
//     "ph": 3.8,
//     "attenuation_level": 85,
//     "volume": {
//         "value": 20,
//         "unit": "litres"
//     },
//     "boil_volume": {
//         "value": 25,
//         "unit": "litres"
//     },
//     "method": {
//         "mash_temp": [
//             {
//                 "temp": {
//                     "value": 60,
//                     "unit": "celsius"
//                 },
//                 "duration": 80
//             }
//         ],
//         "fermentation": {
//             "temp": {
//                 "value": 20,
//                 "unit": "celsius"
//             }
//         },
//         "twist": null
//     },
//     "ingredients": {
//         "malt": [
//             {
//                 "name": "Pilsner",
//                 "amount": {
//                     "value": 3.627,
//                     "unit": "kilograms"
//                 }
//             },
//             {
//                 "name": "Torrified Wheat",
//                 "amount": {
//                     "value": 0.567,
//                     "unit": "kilograms"
//                 }
//             },
//             {
//                 "name": "Acidulated Malt",
//                 "amount": {
//                     "value": 0.283,
//                     "unit": "kilograms"
//                 }
//             },
//             {
//                 "name": "Rye",
//                 "amount": {
//                     "value": 0.136,
//                     "unit": "kilograms"
//                 }
//             },
//             {
//                 "name": "Flaked Oats",
//                 "amount": {
//                     "value": 0.136,
//                     "unit": "kilograms"
//                 }
//             }
//         ],
//         "hops": [
//             {
//                 "name": "Magnum",
//                 "amount": {
//                     "value": 10,
//                     "unit": "grams"
//                 },
//                 "add": "60",
//                 "attribute": "Bittering"
//             },
//             {
//                 "name": "Mosaic",
//                 "amount": {
//                     "value": 10,
//                     "unit": "grams"
//                 },
//                 "add": "0",
//                 "attribute": "Aroma"
//             },
//             {
//                 "name": "Amarillo",
//                 "amount": {
//                     "value": 10,
//                     "unit": "grams"
//                 },
//                 "add": "0",
//                 "attribute": "Aroma"
//             },
//             {
//                 "name": "Lemon Peel",
//                 "amount": {
//                     "value": 20,
//                     "unit": "grams"
//                 },
//                 "add": "Flame Out",
//                 "attribute": "Flavour"
//             },
//             {
//                 "name": "Coriander Seeds",
//                 "amount": {
//                     "value": 1,
//                     "unit": "grams"
//                 },
//                 "add": "Flame Out",
//                 "attribute": "Flavour"
//             }
//         ],
//         "yeast": "Wyeast 1272 - American Ale II™"
//     },
//     "food_pairing": [
//         "Grilled Halibut",
//         "Pickled Herrings",
//         "Moules Frites"
//     ],
//     "brewers_tips": "Play around with the citrus flavour by using differing amounts of lemon peel, orange peel, grapefruit peel, lime peel or kaffir lime leaves.",
//     "contributed_by": "John Jenkman <johnjenkman>"
// }
