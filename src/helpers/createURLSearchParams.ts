import { BeerRequestParams } from "../models/beer";

const createURLSearchParams = (params: BeerRequestParams) => {
  return new URLSearchParams(params as any).toString();
};
export default createURLSearchParams;
