const createURLSearchParams = (params: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};
export default createURLSearchParams;
