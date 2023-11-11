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
