import {Stack, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import VapeCard from "./VapeCard";

const BestDeals = () => {
    const data = [
        {
        id:'1',
        url:'/images/mint.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },
    {
        id:'2',
        url:'/images/vape.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },
    {
        id:'3',
        url:'/images/blue.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },
    {
        id:'4',
        url:'/images/citrus.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },
    {
        id:'5',
        url:'/images/green.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },
    {
        id:'6',
        url:'/images/strawberry.png',
        promotePrice:'30,000',
        originalPrice:'30,000',
        name:'Refreshing Mint',
        promotePercent:'25',
        points:'600'
    },

]
  return (
        <div className=" flex flex-col justify-center items-center h-auto w-full "
        >
            <Typography variant="h3" fontWeight={"bold"}>Best Deals</Typography>
            <Typography variant="h6">Just for you</Typography>

            <div className=" flex max-[500px]:flex-col my-6 w-[92%] justify-evenly max-[500px]:gap-6 gap-0 items-center " >
                {data?.slice(0, 6).map((product, i) => (
                    <VapeCard key={i + product.id} i={i} product={product} />
                ))}
            </div>
            <button  className=" transition-all hover:bg-[#d4d4d498] font-sans active:bg-[#d4d4d4] bg-[#d4d4d4] text-[#000] rounded-full w-[16rem] p-2 capitalize ">View More <ArrowForwardIosOutlinedIcon fontSize="small"/></button>
        </div>
  )
}

export default BestDeals