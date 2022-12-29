import * as path from "./ApiUrl";
import * as Api from "./ApiMethod";

export const UserAPI = function (...params) {
  const { searchText } = params[0]; 
   console.log("data create contact  index ",params[0])
  //add variable into url
  let updatePath = `${path.SatyAPI}search?pageNo=0&pageSize=50`;
  if (searchText) {
    updatePath = `${path.SatyAPI}search?pageNo=0&pageSize=50&searchText=${searchText}`;
  }
  //console.log("Data create", updatePath);
  return Api.getRequest(updatePath);
};
