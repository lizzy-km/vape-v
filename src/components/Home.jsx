import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetBannerList } from "../banner-list-query";
import useResponsive from "./useResponsive";
import { useState } from "react";
import Loader from "./Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useGetBannerList("heroBanner", 1, {
    onSuccess(data) {
      setIsLoading(true);
    },
  });

  // const [slide, setSlide] = useState(true);
  // const [total, setTotal] = useState(0);

  // const showDetail = () => {
  //   const detail = document.getElementById("detail");
  //   setSlide(false);
  //   detail.classList.add("h-auto");
  //   detail.classList.remove("h-0");
  //   detail.classList.add("p-[2%]");
  //   detail.classList.remove("p-[0px]");
  //   detail.classList.add("opacity-1");
  //   detail.classList.remove("opacity-0");
  // };

  // const hideDetail = () => {
  //   const detail = document.getElementById("detail");

  //   detail.classList.add("h-auto");
  //   detail.classList.remove("h-0");
  //   detail.classList.add("p-[2%]");
  //   detail.classList.remove("p-[0px]");
  //   detail.classList.add("opacity-1");
  //   detail.classList.remove("opacity-0");
  //   // detail.classList.add('h-0')
  //   // detail.classList.remove('h-auto')
  //   // detail.classList.add('p-[0px]')
  //   // detail.classList.remove('p-[2%]')
  //   // detail.classList.add('opacity-0')
  //   // detail.classList.remove('opacity-1')
  // };

  const { mobile, tablet, desktop } = useResponsive();

  // if (mobile || desktop) {
  //   const detail = document.getElementById("detail");

  //   detail?.classList.add("h-auto");
  //   detail?.classList.remove("h-0");
  //   detail?.classList.add("p-[2%]");
  //   detail?.classList.remove("p-[0px]");
  //   detail?.classList.add("opacity-1");
  //   detail?.classList.remove("opacity-0");
  // }

  return (
    <div
      id="hero"
      className=" overflow-hidden cursor-pointer flex h-[100%] w-full  relative "
    >
      {/* <img className=" opacity-90 rounded-t-[30px] z-[99]    absolute w-[100%]   bottom-[5%] "  src="/public/images/homeB.png" alt="" /> */}
      <div className=" bg-[#382e3433]  z-[999] max-[500px]:h-[85%] h-[93%] absolute w-full transition-all flex max-[500px]:py-0 py-[1rem] justify-center items-end  "></div>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={mobile ? 46 : 41.7}
        totalSlides={isLoading == false ? 1 : mobile ? 4 : 4}
        infinite={true}
        isPlaying={true}
        className="  relative w-full h-auto  "
      >
        <Slider>
          {isLoading ? (
            data?.map(
              (banner, i) =>
                banner.isWeb === 1 && (
                  <Slide key={i} index={i}>
                    <img
                      src={banner.url}
                      className="   relative object-cover "
                    />
                  </Slide>
                )
            )
          ) : (
            <Slide index={0}>
              <Loader />{" "}
            </Slide>
          )}
        </Slider>

        <div className=" flex top-0 absolute p-2 h-full z-[999]  justify-center items-center  ">
          <ButtonBack className=" hover:bg-[#2121214e] transition-all px-1  h-[20%] bg-[#21212168] rounded-full ">
            <ArrowBackIosOutlinedIcon sx={{ color: "white", padding: "4px" }} />
          </ButtonBack>
        </div>

        <div className=" flex top-0 right-0 absolute z-[999]   p-2 h-full justify-center items-center  ">
          <ButtonNext className="  hover:bg-[#2121214e] transition-all px-1  h-[20%] bg-[#21212168] rounded-full ">
            <ArrowForwardIosOutlinedIcon
              sx={{ color: "white", padding: "4px" }}
            />
          </ButtonNext>
        </div>

        <div className=" absolute w-full flex justify-center items-center max-[500px]:bottom-[0] bottom-1  ">
          <DotGroup className=" z-[999] backdrop-blur bg-[#21212155] max-[500px]:px-[.6rem] max-[500px]:py-[0.4rem] px-[1rem] py-[0.6rem] rounded-full w-auto  "></DotGroup>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Home;
