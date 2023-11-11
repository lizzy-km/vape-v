import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import useResponsive from "./useResponsive";
import Scroll from "../Scroll";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { mobile, tablet, desktop } = useResponsive();





  return (
    <div
    id="navBar"
     className=" z-[9999] bg-[#21212100]   fixed w-full flex max-[500px]:h-[40px]    justify-center items-center  ">
      <div className=" max-[500px]:w-full  w-[91.5%] flex p-1 justify-between items-center ">
        <NavLink to={'/'} className=" cursor-pointer flex  gap-[5px] justify-center items-center ">
          <p className=" head text-white max-[500px]:text-[21px] text-[28px] font-semibold ">
            PI
          </p>
          <div className=" flex justify-center items-center   max-h-[20px]  ">
            <img
              className=" max-[500px]:w-[36px] w-[46px]  object-right  "
              src="../images/logo.png"
              alt="logo"
            />
          </div>
        </NavLink>

        <div className="flex  justify-between items-center  ">
          <NavLink to={'/search'}>
            <SearchOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",

                fontSize: mobile ? "30px" : "35px",
              }}
            />
          </NavLink>
          <NavLink to={'/cart'}>
            <ShoppingCartOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",
                fontSize: mobile ? "30px" : "35px",
              }}
            />
          </NavLink>
          <NavLink to={'/menu'}>
            <DensityMediumOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",
                fontSize: mobile ? "30px" : "35px",
              }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
