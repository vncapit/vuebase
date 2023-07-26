import axiosInstance from "../axiosInstance";

export const login = (payload) => {
  return axiosInstance({
    url: "auth/login",
    method: "post",
    data: payload,
  });
};
