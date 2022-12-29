import axios from "axios";
// const options = {
//   method: "GET",
// };
//const token = localStorage.getItem("access_token");
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicmVzb3VyY2VfaWQiXSwidXNlcl9uYW1lIjoiYWRtaW5AdGV4YWxhLm5ldCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2MDQ2NjI4MTMsImF1dGhvcml0aWVzIjpbIlJPTEVfU1VQRVIgQURNSU4iXSwianRpIjoiZmIyMzlmNTYtYWYwNC00OTI1LTlkNDEtZmIzNDY0NmI1YTlmIiwiY2xpZW50X2lkIjoic29sYXJ0b3BwcyJ9.eKnviESVcznLxXvyDchNDiT60xloxNkMGsUYsDT_2qhFPvIh9fFdidxUKokmNzsSOk5V-ZwZyjBkt1phHcdkhRZR8ueG0lsf3pi5qER2nVUZD-jTMHMVGhaUt7dPLMisY6Uyy3f6yS_GzRB1xFE7o-3gxvAqYhC5GdV_hUuVaEpCgv6QHFHmMXQcuUZLFgvrIlcxV0OSA82Tk1OdjHuul-fSJbtMEL_fe66o1jXieux5ODCYKQ6VKtE3gzHqRWY_lq6J3Ts0IifFpnngA6S_mXxZJklJO9_ZRUylvq4wSwluBuW-owJeZUdsq1JCoqdlGYTVRTIq3Y01laiqvT0JgA";
const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Channel-Type": "WEB",
    Authorization: token ? `Bearer ${token}` : "",
  },
};

export const getRequest = function (ApiUrl) {
  return axios.get(`${ApiUrl}`, axiosConfig);
};

export const deleteRequest = function (ApiUrl) {
  return axios.delete(`${ApiUrl}`, axiosConfig);
};

export const putRequest = function (ApiUrl, params) {
  return axios.put(`${ApiUrl}`, params["data"], axiosConfig);
};

export const postRequest = function (ApiUrl, params) {
  return axios.post(`${ApiUrl}`, params["data"], axiosConfig);
};
