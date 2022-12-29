import * as path from "./ApiUrl";
import * as Api from "./ApiMethod";

export const FetchProduct = function (...params) {
  // console.log("data create contact  index ",params[0])
  // add variable into url
  let updatePath = `${path.ProductListData}`;
  return Api.getRequest(updatePath);
};
