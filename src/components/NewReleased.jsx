import { Stack, Typography, Grid, Button, Box } from "@mui/material";
//import { useQuery } from "@tanstack/react-query"
//import axios from "axios"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetNewReleased } from "../banner-list-query";
import ReleasedCard from "./ReleasedCard";

const NewReleased = () => {
  const data = [
    {
      id: "1",
      background:
        "https://github.com/lizzy-km/vape-v/blob/main/public/images/fruit1.png?raw=true",
      url: "/images/strawberry.png",
      bgClass: "#c9586a",
      name: "Strawberry Yougurt with Refreshing flavour",
      percent: "3",
      originalPrice: "30,000",
    },
    {
      id: "2",
      background:
        "https://github.com/lizzy-km/vape-v/blob/main/public/images/fruit2.png?raw=true",
      url: "/images/citrus.png",
      bgClass: " #f3b78a ",
      name: "Strawberry Yougurt with Refreshing flavour",
      percent: "3",
      originalPrice: "30,000",
    },
    {
      id: "3",
      background:
        "https://github.com/lizzy-km/vape-v/blob/main/public/images/mintleaf.png?raw=true",
      url: "/images/blue.png",
      bgClass: " #4b60ea ",
      name: "Strawberry Yougurt with Refreshing flavour",
      percent: "3",
      originalPrice: "30,000",
    },

    {
      id: "4",
      background:
        "https://github.com/lizzy-km/vape-v/blob/main/public/images/fruit3.png?raw=true",
      url: "/images/green.png",
      bgClass: " #62d450 ",
      name: "Strawberry Yougurt with Refreshing flavour",
      percent: "3",
      originalPrice: "30,000",
    },
  ];
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={7}
      //   mx={1}
    >
      <div className=" flex gap-1 ">
        <Typography
          className=" text-red-500 "
          variant="h3"
          id="red"
          fontWeight={"bold"}
        >
          {" "}
          New
        </Typography>
        <Typography variant="h3" id="red" fontWeight={"bold"}>
          {" "}
          Released
        </Typography>
      </div>

      <Typography variant="h7">Try Out Our Latest Flavour Here</Typography>
      <div className=" justify-center my-[1.5rem] flex-wrap h-auto w-[100%] gap-3 max-[500px]:w-[90%] flex max-[500px]:flex-col ">
        {data?.slice(0, 4).map((product, i) => (
          <ReleasedCard product={product} key={i} />
        ))}
      </div>
      <button className=" transition-all hover:bg-[#d4d4d498] font-sans active:bg-[#d4d4d4] bg-[#d4d4d4] text-[#000] rounded-full w-[16rem] p-2 capitalize ">
        View More <ArrowForwardIosOutlinedIcon fontSize="small" />
      </button>
    </Stack>
  );
};

export default NewReleased;
