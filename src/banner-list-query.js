import { useQuery } from "@tanstack/react-query";
import { base } from "./api/api";

export const useGetBannerList = (key, bannerNum, options) => {
  return useQuery({
    queryKey: [`${key}`],
    queryFn: async () => {
      return await base
        .get(`/Miscellaneous/GetBannerList?bannerType=${bannerNum}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    ...options,
  });
};

export const useGetBestDeals = (options) => {
  return useQuery({
    queryKey: ["bestdeals"],
    queryFn: async () => {
      return await base
        .get("/Product/GetLandingProductPromotion")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    ...options,
  });
};

export const useGetNewReleased = (options) => {
  return useQuery({
    queryKey: ["newReleased"],
    queryFn: async () => {
      return await base
        .get("/Product/GetLandingProductLatest")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    ...options,
  });
};

export const useGetDevices = (options) => {
  return useQuery({
    queryKey: ["devices"],
    queryFn: async () => {
      return await base
        .get("/Product/GetAllProductListBuyer")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    ...options,
  });
};
