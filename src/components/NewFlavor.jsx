import { Box } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useGetBannerList } from "../banner-list-query";
import useResponsive from "./useResponsive";

const NewFlavor = () => {
  const { data } = useGetBannerList("adsBanner", 2);
  const { mobile, tablet, desktop } = useResponsive();

  const slideNext = () => {
    const card = document.getElementById("cardF");

    card.classList.toggle(mobile ? "translate-x-[-96%]" : "translate-x-[-98%]");
  };
  return (
    <div className=" relative  max-w-[100%] w-[100%] self-end overflow-hidden flex justify-end items-end ">
      <div
        id="cardF"
        className=" max-[500px]:max-w-[98%] max-w-[98%]  transition-all  flex gap-1 "
      >
        {data?.map((banner, i) =>
          mobile
            ? banner.isWeb === 0 && (
                <div key={i} className=" cursor-pointer  min-w-[96%]  ">
                  <img src={banner.url} style={{ borderRadius: "10px" }} />
                </div>
              )
            : banner.isWeb === 1 && (
                <div key={i} className=" cursor-pointer  min-w-[98%]  ">
                  <img src={banner.url} style={{ borderRadius: "10px" }} />
                </div>
              )
        )}
      </div>
      <div className=" top-0 h-[100%] flex  justify-center items-center absolute right-4 ">
        <div
          onClick={slideNext}
          className=" flex justify-center items-center max-[500px]:h-[40%] h-[40%] backdrop-blur px-1 rounded-lg cursor-pointer transition-all active:bg-[#212121c4] hover:bg-[#21212153] bg-[#21212184] "
        >
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default NewFlavor;
