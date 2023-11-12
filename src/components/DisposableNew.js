import { Stack, Typography, Grid, Button, Box } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import useResponsive from "./useResponsive";
import { useEffect, useState } from "react";
import DevicesData from "./DevicesData";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
const DisposableNew = () => {
  const { devices } = DevicesData();
  const [slide, setSlide] = useState(0);
  const { mobile, tablet, desktop } = useResponsive();
  const slideNext = () => {
    setSlide(slide + 1);
  };
  useEffect(() => {
    let limit = 12 * slide;
    let cardNum = mobile ? 60 : tablet ? 48 : 24;
    if (limit > cardNum) {
      setSlide(0);
    }
  }, [slide]);
  return /*#__PURE__*/ _jsx("div", {
    className:
      " w-[96%] rounded-lg justify-center items-center bg-black max-[500px]:mx-5 mx-[1.8rem] ",
    style: {
      background:
        "url(https://vape-pi-shopdoora-khant-lin-tun.vercel.app/covers/pv3.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: mobile ? "400%" : "100%",
      backgroundPosition: "left center"
    },
    children:
      devices === null || devices === void 0
        ? void 0
        : devices.map(
            (cate, i) =>
              cate.name === "Disposables" &&
              /*#__PURE__*/ _jsxs(
                "div",
                {
                  className:
                    " relative max-[500px]:flex-col flex w-full justify-between items-center ",
                  children: [
                    /*#__PURE__*/ _jsx("div", {
                      className:
                        " max-[500px]:min-w-[100%] min-w-[20%] max-[500px]:w-full flex max-[500px]:p-2 p-0 max-[500px]:justify-center justify-start items-center ",
                      children: /*#__PURE__*/ _jsxs(Stack, {
                        direction: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                          !mobile &&
                            /*#__PURE__*/ _jsx("img", {
                              src: "https://github.com/lizzy-km/vape-v/blob/main/public/images/vapedisposable.png?raw=true",
                              className: " w-[50px] h-auto ",
                              style: {
                                borderRadius: "10px"
                              }
                            }),
                          /*#__PURE__*/ _jsxs("div", {
                            className:
                              " flex flex-col w-full items-start justify-center max-[500px]:items-center ",
                            children: [
                              /*#__PURE__*/ _jsx(Typography, {
                                variant: "h4",
                                ml: 0.5,
                                fontWeight: "bold",
                                sx: {
                                  color: "white"
                                },
                                children: cate.name
                              }),
                              /*#__PURE__*/ _jsx(Typography, {
                                className:
                                  " max-[500px]:w-full w-[70%] text-wrap  ",
                                ml: 0.5,
                                fontWeight: "thin",
                                sx: {
                                  color: "white"
                                },
                                children: "Easy, clean & superb flavor"
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      className:
                        " transition-all flex max-[500px]:rounded-lg rounded-r-lg max-[500px]:w-[100%] w-[75%] gap-2 max-[500px]:p-2   p-2 overflow-hidden    ",
                      children: /*#__PURE__*/ _jsx("div", {
                        id: "",
                        style: {
                          translate: `-${slide * 12}rem`
                        },
                        className: "  transition-all gap-2 w-full flex ",
                        children:
                          cate === null || cate === void 0
                            ? void 0
                            : cate.productListBuyers
                                .slice(0, 6)
                                .map((product, i) =>
                                  /*#__PURE__*/ _jsxs(
                                    "div",
                                    {
                                      className:
                                        " p-6 transition-all flex justify-center items-center max-[500px]:min-w-[191px] flex-col min-w-[191px]",
                                      children: [
                                        /*#__PURE__*/ _jsx("img", {
                                          src: product.url,
                                          className:
                                            " cursor-pointer w-[100%] rounded-lg "
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                          sx: {
                                            color: "white",
                                            fontSize: mobile ? "10px" : "14px"
                                          },
                                          children: product.name
                                        }),
                                        product.promotePrice > 0
                                          ? /*#__PURE__*/ _jsxs(_Fragment, {
                                              children: [
                                                /*#__PURE__*/ _jsxs(
                                                  Typography,
                                                  {
                                                    sx: {
                                                      color: "white"
                                                    },
                                                    children: [
                                                      product.promotePrice,
                                                      " Ks"
                                                    ]
                                                  }
                                                ),
                                                /*#__PURE__*/ _jsxs(
                                                  Typography,
                                                  {
                                                    sx: {
                                                      color: "gold",
                                                      textDecoration:
                                                        "line-through",
                                                      fontSize: mobile
                                                        ? "10px"
                                                        : "14px"
                                                    },
                                                    children: [
                                                      product.originalPrice,
                                                      " Ks"
                                                    ]
                                                  }
                                                )
                                              ]
                                            })
                                          : /*#__PURE__*/ _jsxs(Typography, {
                                              sx: {
                                                color: "gold",
                                                fontSize: mobile
                                                  ? "10px"
                                                  : "14px"
                                              },
                                              children: [
                                                product.originalPrice,
                                                " MMK"
                                              ]
                                            }),
                                        /*#__PURE__*/ _jsxs("div", {
                                          className:
                                            " flex justify-center items-center ",
                                          children: [
                                            /*#__PURE__*/ _jsx("svg", {
                                              className:
                                                "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x9fn3p",
                                              focusable: "false",
                                              "aria-hidden": "true",
                                              viewBox: "0 0 24 24",
                                              "data-testid": "StarIcon",
                                              children: /*#__PURE__*/ _jsx(
                                                "path",
                                                {
                                                  d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                }
                                              )
                                            }),
                                            /*#__PURE__*/ _jsxs("p", {
                                              className:
                                                " tracking-wider font-sans font-medium text-yellow-400 max-[500px]:text-[10px] text-[12px] ",
                                              children: [" ", "600 Points", " "]
                                            })
                                          ]
                                        })
                                      ]
                                    },
                                    i
                                  )
                                )
                      })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      className:
                        " top-0 h-[65%] flex max-[500px]:items-end justify-center items-center absolute max-[500px]:right-[-4%] right-[2%]",
                      children: /*#__PURE__*/ _jsx("div", {
                        onClick: slideNext,
                        className:
                          " flex justify-center items-center max-[500px]:h-[20%] h-[40%] backdrop-blur px-1 rounded-lg cursor-pointer transition-all active:bg-[#212121c4] hover:bg-[#21212153] bg-[#21212184] ",
                        children: /*#__PURE__*/ _jsx(
                          ArrowForwardIosOutlinedIcon,
                          {
                            sx: {
                              color: "white"
                            }
                          }
                        )
                      })
                    })
                  ]
                },
                i
              )
          )
  });
};
export default DisposableNew;


// import { Stack, Typography, Grid, Button, Box } from "@mui/material";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import useResponsive from "./useResponsive";
// import { useEffect, useState } from "react";
// import DevicesData from "./DevicesData";

// const DisposableNew = () => {
//   const { devices } = DevicesData();
//   const [slide, setSlide] = useState(0);
//   const { mobile, tablet, desktop } = useResponsive();

//   const slideNext = () => {
//     setSlide(slide + 1);
//   };

//   useEffect(() => {
//     let limit = 12 * slide;
//     let cardNum = mobile ? 60 : tablet ? 48 : 24;

//     if (limit > cardNum) {
//       setSlide(0);
//     }
//   }, [slide]);
//   return (
//     <div
//       className=" w-[96%] rounded-lg justify-center items-center bg-black max-[500px]:mx-5 mx-[1.8rem] "
//       style={{
//         background:
//           "url(https://vape-pi-shopdoora-khant-lin-tun.vercel.app/covers/pv3.png)",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: mobile ? "400%" : "100%",
//         backgroundPosition: "left center",
//       }}
//     >
//       {devices?.map(
//         (cate, i) =>
//           cate.name === "Disposables" && (
//             <div
//               className=" relative max-[500px]:flex-col flex w-full justify-between items-center "
//               key={i}
//             >
//               <div className=" max-[500px]:min-w-[100%] min-w-[20%] max-[500px]:w-full flex max-[500px]:p-2 p-0 max-[500px]:justify-center justify-start items-center ">
//                 <Stack
//                   direction={"row"}
//                   justifyContent={"center"}
//                   alignItems={"center"}
//                 >
//                   {!mobile && (
//                     <img
//                       src="https://github.com/lizzy-km/vape-v/blob/main/public/images/vapedisposable.png?raw=true"
//                       className=" w-[50px] h-auto "
//                       style={{ borderRadius: "10px" }}
//                     />
//                   )}

//                   <div className=" flex flex-col w-full items-start justify-center max-[500px]:items-center ">
//                     <Typography
//                       variant="h4"
//                       ml={0.5}
//                       fontWeight={"bold"}
//                       sx={{ color: "white" }}
//                     >
//                       {cate.name}
//                     </Typography>
//                     <Typography
//                       className=" max-[500px]:w-full w-[70%] text-wrap  "
//                       ml={0.5}
//                       fontWeight={"thin"}
//                       sx={{ color: "white" }}
//                     >
//                       Easy, clean & superb flavor
//                     </Typography>
//                   </div>
//                 </Stack>
//               </div>
//               <div className=" transition-all flex max-[500px]:rounded-lg rounded-r-lg max-[500px]:w-[100%] w-[75%] gap-2 max-[500px]:p-2   p-2 overflow-hidden    ">
//                 <div
//                   id=""
//                   style={{
//                     translate: `-${slide * 12}rem`,
//                   }}
//                   className="  transition-all gap-2 w-full flex "
//                 >
//                   {cate?.productListBuyers.slice(0, 6).map((product, i) => (
//                     <div
//                       key={i}
//                       className=" p-6 transition-all flex justify-center items-center max-[500px]:min-w-[191px] flex-col min-w-[191px]"
//                     >
//                       <img
//                         src={product.url}
//                         className=" cursor-pointer w-[100%] rounded-lg "
//                       />
//                       <Typography
//                         sx={{
//                           color: "white",
//                           fontSize: mobile ? "10px" : "14px",
//                         }}
//                       >
//                         {product.name}
//                       </Typography>
//                       {product.promotePrice > 0 ? (
//                         <>
//                           <Typography sx={{ color: "white" }}>
//                             {product.promotePrice} Ks
//                           </Typography>
//                           <Typography
//                             sx={{
//                               color: "gold",
//                               textDecoration: "line-through",
//                               fontSize: mobile ? "10px" : "14px",
//                             }}
//                           >
//                             {product.originalPrice} Ks
//                           </Typography>
//                         </>
//                       ) : (
//                         <Typography
//                           sx={{
//                             color: "gold",
//                             fontSize: mobile ? "10px" : "14px",
//                           }}
//                         >
//                           {product.originalPrice} MMK
//                         </Typography>
//                       )}

//                       <div className=" flex justify-center items-center ">
//                         <svg
//                           className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-x9fn3p"
//                           focusable="false"
//                           aria-hidden="true"
//                           viewBox="0 0 24 24"
//                           data-testid="StarIcon"
//                         >
//                           <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//                         </svg>
//                         <p className=" tracking-wider font-sans font-medium text-yellow-400 max-[500px]:text-[10px] text-[12px] ">
//                           {" "}
//                           600 Points{" "}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className=" top-0 h-[65%] flex max-[500px]:items-end justify-center items-center absolute max-[500px]:right-[-4%] right-[2%]">
//                 <div
//                   onClick={slideNext}
//                   className=" flex justify-center items-center max-[500px]:h-[20%] h-[40%] backdrop-blur px-1 rounded-lg cursor-pointer transition-all active:bg-[#212121c4] hover:bg-[#21212153] bg-[#21212184] "
//                 >
//                   <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
//                 </div>
//               </div>
//             </div>
//           )
//       )}
//     </div>
//   );
// };

// export default DisposableNew;
