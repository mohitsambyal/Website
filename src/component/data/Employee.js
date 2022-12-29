import * as path from "./ApiUrl";
import * as Api from "./ApiMethod";



export const FetchEmployees = function (...params) {
  // console.log("data create contact  index ",params[0])
  let updatePath = `${path.EmployeeListData}`;
  return Api.getRequest(updatePath);
};