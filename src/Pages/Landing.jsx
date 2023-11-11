import BestDeals from "../components/BestDeals";
import DevicesNew from "../components/DevicesNew";
import DisposableNew from "../components/DisposableNew";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Member from "../components/Member";
import NewFlavor from "../components/NewFlavor";
import NewReleased from "../components/NewReleased";
import PodsNew from "../components/PodsNew";
import Scroll from "../Scroll";
const Landing = () => {
    const { handleScroll, isScroll } = Scroll()

    if (isScroll == true) {
      const navBar =  document.getElementById('navBar')
  
      navBar?.classList.add('bg-[#18181889]')
      navBar?.classList.remove('bg-[#21212100]')
    }else {
      const navBar =  document.getElementById('navBar')
  
      navBar?.classList.remove('bg-[#18181889]')
      navBar?.classList.add('bg-[#21212100]')
    }
    return (
        
          <div className="  flex flex-col  items-center  w-full h-auto ">
            <div className="  w-full max-[500px]:h-[40px] bg-[#212121] " >
              
            </div>
            <div className=" flex h-auto items-center  w-[100%] flex-col gap-2 ">
              <Home />
              <div className=" flex h-auto max-[500px]:gap-5  w-[94%] items-center justify-center flex-col gap-6 ">
                <BestDeals />
                <Member />
                <NewReleased />
                <NewFlavor />
                <DevicesNew />
                <PodsNew />
                <DisposableNew />
                <Footer />
              </div>
            </div>
          </div>
    );
}

export default Landing
