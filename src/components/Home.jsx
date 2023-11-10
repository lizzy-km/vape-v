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

const Home = () => {
  const {data} = useGetBannerList("heroBanner", 1, {
    onSuccess(data){

    }
  })

  const [slide,setSlide] = useState(true)
  const [total,setTotal] = useState(0)

 const showDetail = () => {
  const detail = document.getElementById('detail')
  setSlide(false)
  detail.classList.add('h-auto')
  detail.classList.remove('h-0')
  detail.classList.add('p-[2%]')
  detail.classList.remove('p-[0px]')
  detail.classList.add('opacity-1')
  detail.classList.remove('opacity-0')
 }

 const hideDetail = () => {
  const detail = document.getElementById('detail')

  detail.classList.add('h-0')
  detail.classList.remove('h-auto')
  detail.classList.add('p-[0px]')
  detail.classList.remove('p-[2%]')
  detail.classList.add('opacity-0')
  detail.classList.remove('opacity-1')
 }

 const { mobile, tablet, desktop } = useResponsive();

 if (mobile) {
  const detail = document.getElementById('detail')

  detail?.classList.add('h-auto')
  detail?.classList.remove('h-0')
  detail?.classList.add('p-[2%]')
  detail?.classList.remove('p-[0px]')
  detail?.classList.add('opacity-1')
  detail?.classList.remove('opacity-0')
 }


  return (
    <div onMouseLeave={ mobile ? null: hideDetail} onMouseEnter={showDetail} className=" overflow-hidden cursor-pointer flex w-full h-auto relative " >

      <div  className=" bg-[#21212155]  z-[999] max-[500px]:h-[85%] h-[93%] absolute w-full transition-all flex max-[500px]:py-0 py-[1rem] justify-center items-end  " >
        <div id="detail" className="  w-full flex flex-col items-center transition-all justify-center text-white h-0 opacity-0  p-[0px]    " >
          <p className=" font-thin font-sans max-[500px]:text-md text-xl " >
            The Best Look
          </p>
          <h1 className=" font-bold max-[500px]:text-2xl text-4xl font-sans  " >
            Anytime Anywhere
          </h1>
          <p className=" font-thin p-3 font-sans max-[500px]:text-sm text-lg " >
            Start with 10,000 MMK
          </p>
          <div className=" max-[500px]:text-md transition-colors bg-[#2121219e] backdrop-blur-md hover:bg-[#2121214e] cursor-pointer max-[500px]:px-[1rem] max-[500px]:py-[.1rem] px-[1.2rem] py-[.3rem] rounded-full font-thin font-sans text-lg ">
            View
          </div>
        </div>
      </div>

      <CarouselProvider

        naturalSlideWidth={100}
        naturalSlideHeight={mobile ? 150 : 40}
        totalSlides={4}
        infinite={true}
        isPlaying={ slide == true? false : true}

        className='  relative w-full h-auto  '
        
      >
        <Slider>
          {
           mobile == true ? data?.map((banner, i) => (
            banner.isWeb === 0 && (
              <Slide key={i} index={i}>
                <img src={banner.url} className=" relative object-cover " />
              </Slide>)
            )) : data?.map((banner, i) => (
              banner.isWeb === 1 && (
                <Slide key={i} index={i}>
                  <img src={banner.url} className=" relative object-cover " />
                </Slide>)
              ))
            
          }
        </Slider>

        <DotGroup></DotGroup>
        <div className=" flex top-0 absolute p-2 h-full z-[999]  justify-center items-center  " >
        <ButtonBack  className=' hover:bg-[#2121214e] transition-all  h-[20%] bg-[#21212168] rounded-full ' >
          <ArrowBackIosOutlinedIcon sx={{ color: "white", padding:'4px' }} />
        </ButtonBack>
        </div>

        <div className=" flex top-0 right-0 absolute z-[999]   p-2 h-full justify-center items-center  " >
        <ButtonNext    className='  hover:bg-[#2121214e] transition-all   h-[20%] bg-[#21212168] rounded-full '  >
          <ArrowForwardIosOutlinedIcon sx={{ color: "white",padding:'4px' }} />
        </ButtonNext>
        </div>

        
       
      </CarouselProvider>
      
    </div>
  );
};

export default Home;
