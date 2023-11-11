import { Stack, Typography, Grid, Button, Box } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetDevices } from "../banner-list-query";
import { useEffect, useState } from "react";
import useResponsive from "./useResponsive";

const PodsNew = () => {
  const { data } = useGetDevices();
  const [slide, setSlide] = useState(0);
  const { mobile, tablet, desktop } = useResponsive();

  const slideNext = () => {
    setSlide(slide + 1);
  };

  const slidePrev = () => {
    setSlide(slide - 1);
  };

  useEffect(() => {
    let limit = 12 * slide;

    let cardNum = mobile ? 60 : tablet ? 48 : 24
    if (limit > cardNum) {
      setSlide(0);
    }
  }, [slide]);

  return (
    <div
      className=" w-[96%] rounded-lg justify-center items-center bg-black max-[500px]:mx-5 mx-[1.8rem] "
      style={{
        background: "url(https://vape-pi-shopdoora-khant-lin-tun.vercel.app/covers/pv2.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize:mobile ?  "400%" : "100%",
        backgroundPosition: "left center",
      }}
    >
      {data?.mainCategory.map(
        (cate, i) =>
          cate.name === "Pods" && (
            <div
              className=" relative max-[500px]:flex-col flex w-full justify-between items-center "
              key={i}
            >
              <div className=" min-w-[20%] max-[500px]:w-full flex max-[500px]:p-2 p-4 justify-center items-center ">
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {
                    !mobile &&  <img
                    src="https://github.com/lizzy-km/vape-v/blob/main/public/images/vapepod.png?raw=true"
                    className=" w-[50px] h-auto "
                    style={{ borderRadius: "10px" }}
                  />
                  }
                 
                  <div>
                    <Typography
                      variant="h4"
                      ml={0.5}
                      fontWeight={"bold"}
                      sx={{ color: "white" }}
                    >
                      {cate.name}
                    </Typography>
                    <Typography
                    className='w-[70%]'
                      ml={0.5}
                      fontWeight={"thin"}
                      sx={{ color: "white" }}
                    >
                      Variety of choices available
                    </Typography>
                  </div>
                </Stack>
              </div>
              <div className=" transition-all flex max-[500px]:rounded-lg rounded-r-lg max-[500px]:w-[100%] w-[74.6%] gap-2 max-[500px]:p-2   p-2 overflow-hidden    ">
                <div
                  id=""
                  style={{
                    translate: `-${slide * 12}rem`,
                  }}
                  className="   transition-all gap-2 w-full flex "
                >
                  {cate?.productListBuyers.slice(0, 6).map((product, i) => (
                    <div
                      key={i}
                      className=" p-6 transition-all flex justify-center items-center max-[500px]:min-w-[191px] flex-col min-w-[191px]"
                    >
                      <img
                        src={product.url}
                        className=" cursor-pointer w-[100%] rounded-lg "
                      />
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: mobile ? "10px" : "14px",
                        }}
                      >
                        {product.name}
                      </Typography>
                      {product.promotePrice > 0 ? (
                        <>
                          <Typography sx={{ color: "white" }}>
                            {product.promotePrice} Ks
                          </Typography>
                          <Typography
                            sx={{
                              color: "gold",
                              textDecoration: "line-through",
                              fontSize: mobile ? "10px" : "14px",
                            }}
                          >
                            {product.originalPrice} Ks
                          </Typography>
                        </>
                      ) : (
                        <Typography
                          sx={{
                            color: "gold",
                            fontSize: mobile ? "10px" : "14px",
                          }}
                        >
                          {product.originalPrice} MMK
                        </Typography>
                      )}

                      <div className=" flex justify-center items-center ">
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x9fn3p"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="StarIcon"
                        >
                          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <p className=" tracking-wider font-sans font-medium text-yellow-400 max-[500px]:text-[10px] text-[12px] ">
                          {" "}
                          600 Points{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" top-0 h-[65%] flex max-[500px]:items-end justify-center items-center absolute max-[500px]:right-[-4%] right-[2%]">
                <div
                  onClick={slideNext}
                  className=" flex justify-center items-center max-[500px]:h-[20%] h-[40%] backdrop-blur px-1 rounded-lg cursor-pointer transition-all active:bg-[#212121c4] hover:bg-[#21212153] bg-[#21212184] "
                >
                  <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default PodsNew;
