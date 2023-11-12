import { Stack, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import VapeCard from "./VapeCard";
import useResponsive from "./useResponsive";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const BestDeals = () => {
  const data = [
    {
      id: "1",
      url: "/images/mint.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    },
    {
      id: "2",
      url: "/images/vape.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    },
    {
      id: "3",
      url: "/images/blue.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    },
    {
      id: "4",
      url: "/images/citrus.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    },
    {
      id: "5",
      url: "/images/green.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    },
    {
      id: "6",
      url: "/images/strawberry.png",
      promotePrice: "30,000",
      originalPrice: "30,000",
      name: "Refreshing Mint",
      promotePercent: "25",
      points: "600"
    }
  ];
  const { mobile, tablet, desktop } = useResponsive();
  return /*#__PURE__*/ _jsxs("div", {
    className: " flex flex-col justify-center items-center h-auto w-full ",
    children: [
      /*#__PURE__*/ _jsx(Typography, {
        variant: mobile ? "h4" : "h3",
        fontWeight: "bold",
        children: "Best Deals"
      }),
      /*#__PURE__*/ _jsx(Typography, {
        variant: mobile ? "h6" : "h5",
        children: "Just for you"
      }),
      /*#__PURE__*/ _jsx("div", {
        className:
          " flex max-[500px]:flex flex-wrap my-6 w-[100%] justify-between max-[500px]:gap-2 gap-0 items-center ",
        children:
          data === null || data === void 0
            ? void 0
            : data.slice(0, 6).map((product, i) =>
                /*#__PURE__*/ _jsx(
                  VapeCard,
                  {
                    i: i,
                    product: product
                  },
                  i + product.id
                )
              )
      }),
      /*#__PURE__*/ _jsxs("button", {
        className:
          "  transition-all hover:bg-[#d4d4d498] font-sans active:bg-[#d4d4d4] bg-[#d4d4d4] text-[#000] rounded-full max-[500px]:w-[12rem] w-[16rem] p-2 capitalize ",
        children: [
          "View More ",
          /*#__PURE__*/ _jsx(ArrowForwardIosOutlinedIcon, {
            fontSize: "small"
          })
        ]
      })
    ]
  });
};
export default BestDeals;



// import { Stack, Typography, Grid, Button } from "@mui/material";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import VapeCard from "./VapeCard";
// import useResponsive from "./useResponsive";

// const BestDeals = () => {
//   const data = [
//     {
//       id: "1",
//       url: "/images/mint.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//     {
//       id: "2",
//       url: "/images/vape.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//     {
//       id: "3",
//       url: "/images/blue.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//     {
//       id: "4",
//       url: "/images/citrus.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//     {
//       id: "5",
//       url: "/images/green.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//     {
//       id: "6",
//       url: "/images/strawberry.png",
//       promotePrice: "30,000",
//       originalPrice: "30,000",
//       name: "Refreshing Mint",
//       promotePercent: "25",
//       points: "600",
//     },
//   ];

//   const { mobile, tablet, desktop } = useResponsive();

//   return (
//     <div className=" flex flex-col justify-center items-center h-auto w-full ">
//       <Typography variant={mobile ? "h4" : "h3"} fontWeight={"bold"}>
//         Best Deals
//       </Typography>
//       <Typography variant={mobile ? "h6" : "h5"}>Just for you</Typography>

//       <div className=" flex max-[500px]:flex flex-wrap my-6 w-[100%] justify-between max-[500px]:gap-2 gap-0 items-center ">
//         {data?.slice(0, 6).map((product, i) => (
//           <VapeCard key={i + product.id} i={i} product={product} />
//         ))}
//       </div>
//       <button className="  transition-all hover:bg-[#d4d4d498] font-sans active:bg-[#d4d4d4] bg-[#d4d4d4] text-[#000] rounded-full max-[500px]:w-[12rem] w-[16rem] p-2 capitalize ">
//         View More <ArrowForwardIosOutlinedIcon fontSize="small" />
//       </button>
//     </div>
//   );
// };

// export default BestDeals;
