import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "pure-react-carousel/dist/react-carousel.es.css";
import useResponsive from "./useResponsive";
import DevicesData from "./DevicesData";

const NewFlavor = () => {
  const { flavor } = DevicesData();
  const { mobile, tablet, desktop } = useResponsive();

  const slideNext = () => {
    const card = document.getElementById("cardF");

    card.classList.toggle(mobile ? "translate-x-[-96%]" : "translate-x-[-98%]");
  };
  return (
    <div className=" relative my-[1rem]   max-w-[100%] w-[100%] self-end overflow-hidden rounded-lg flex justify-end items-end ">
      <div
        id="cardF"
        className=" max-[500px]:max-w-[98%] max-w-[98%] rounded-lg  transition-all  flex gap-1 "
      >
        {flavor?.map((banner, i) =>
          mobile
            ? banner.isWeb === 0 && (
                <div
                  key={i}
                  className="rounded-lg cursor-pointer h-full   min-w-[96%]  "
                >
                  <img
                    className="  object-cover "
                    src={banner.url}
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              )
            : banner.isWeb === 1 && (
                <div
                  key={i}
                  className="  rounded-[9px] cursor-pointer  min-w-[98%]  "
                >
                  <img src={banner.url} style={{ borderRadius: "10px" }} />
                </div>
              )
        )}
      </div>
      <div className=" top-0 h-[100%] flex   justify-center items-center absolute right-[1%] ">
        <div
          onClick={slideNext}
          className=" flex justify-center items-center max-[500px]:h-[30%] h-[60%] backdrop-blur px-1 rounded-lg cursor-pointer transition-all active:bg-[#212121c4] hover:bg-[#21212153] bg-[#21212184] "
        >
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default NewFlavor;
