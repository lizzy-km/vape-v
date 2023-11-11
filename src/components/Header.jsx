import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import useResponsive from "./useResponsive";

const Header = () => {
  const { mobile, tablet, desktop } = useResponsive();

  return (
    <div className=" z-[9999] bg-[#1818184e] fixed w-full flex max-[500px]:h-[40px]    justify-center items-center  ">
      <div className=" max-[500px]:w-full  w-[91.5%] flex p-1 justify-between items-center ">
        <div className=" cursor-pointer flex  gap-2 justify-center items-center ">
          <p className=" head text-white max-[500px]:text-[24px] text-[34px] font-semibold ">
            PI
          </p>
          <div className=" flex justify-center items-center   max-h-[30px]  ">
            <img
              className=" max-[500px]:w-[40px] w-[60px]  object-right  "
              src="../images/logo.png"
              alt="logo"
            />
          </div>
        </div>

        <div className="flex  justify-between items-center  ">
          <button>
            <SearchOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",

                fontSize: mobile ? "30px" : "40px",
              }}
            />
          </button>
          <button>
            <ShoppingCartOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",
                fontSize: mobile ? "30px" : "40px",
              }}
            />
          </button>
          <button>
            <DensityMediumOutlinedIcon
              sx={{
                padding: "5px",
                marginRight: "5px",
                color: "white",
                fontSize: mobile ? "30px" : "40px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
