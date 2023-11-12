import { Helmet } from "react-helmet";
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
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Landing = () => {
  const { handleScroll, isScroll } = Scroll();
  if (isScroll == true) {
    const navBar = document.getElementById("navBar");
    navBar === null ||
      navBar === void 0 ||
      navBar.classList.add("bg-[#18181889]");
    navBar === null ||
      navBar === void 0 ||
      navBar.classList.remove("bg-[#21212100]");
  } else {
    const navBar = document.getElementById("navBar");
    navBar === null ||
      navBar === void 0 ||
      navBar.classList.remove("bg-[#18181889]");
    navBar === null ||
      navBar === void 0 ||
      navBar.classList.add("bg-[#21212100]");
  }
  return /*#__PURE__*/ _jsxs("div", {
    className: "  flex flex-col  items-center  w-full h-auto ",
    children: [
      /*#__PURE__*/ _jsxs(Helmet, {
        children: [
          /*#__PURE__*/ _jsx("title", {
            children: "Vape Pi"
          }),
          /*#__PURE__*/ _jsx("meta", {
            name: "description",
            content:
              "Shop incredible deals at Element Vape, a progressive online retail establishment serving the vaping community with mod kits, pod systems, ...."
          }),
          /*#__PURE__*/ _jsx("meta", {
            name: "keywords",
            content:
              "vape, vape pi,vape-pi,vape shop,shop,e-commerce,smoke,myanmar,home,landing, keywords"
          })
        ]
      }),
      /*#__PURE__*/ _jsx("div", {
        className: "  w-full max-[500px]:h-[40px] bg-[#212121] "
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: " flex h-auto items-center  w-[100%] flex-col gap-2 ",
        children: [
          /*#__PURE__*/ _jsx(Home, {}),
          /*#__PURE__*/ _jsxs("div", {
            className:
              " flex h-auto max-[500px]:gap-5  w-[94%] items-center justify-center flex-col gap-6 ",
            children: [
              /*#__PURE__*/ _jsx(BestDeals, {}),
              /*#__PURE__*/ _jsx(Member, {}),
              /*#__PURE__*/ _jsx(NewReleased, {}),
              /*#__PURE__*/ _jsx(NewFlavor, {}),
              /*#__PURE__*/ _jsx(DevicesNew, {}),
              /*#__PURE__*/ _jsx(PodsNew, {}),
              /*#__PURE__*/ _jsx(DisposableNew, {}),
              /*#__PURE__*/ _jsx(Footer, {})
            ]
          })
        ]
      })
    ]
  });
};
export default Landing;



// import { Helmet } from "react-helmet";
// import BestDeals from "../components/BestDeals";
// import DevicesNew from "../components/DevicesNew";
// import DisposableNew from "../components/DisposableNew";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Home from "../components/Home";
// import Member from "../components/Member";
// import NewFlavor from "../components/NewFlavor";
// import NewReleased from "../components/NewReleased";
// import PodsNew from "../components/PodsNew";
// import Scroll from "../Scroll";
// const Landing = () => {
//     const { handleScroll, isScroll } = Scroll()

//     if (isScroll == true) {
//       const navBar =  document.getElementById('navBar')
  
//       navBar?.classList.add('bg-[#18181889]')
//       navBar?.classList.remove('bg-[#21212100]')
//     }else {
//       const navBar =  document.getElementById('navBar')
  
//       navBar?.classList.remove('bg-[#18181889]')
//       navBar?.classList.add('bg-[#21212100]')
//     }
//     return (
        
//           <div className="  flex flex-col  items-center  w-full h-auto ">
//             <Helmet>
//         <title>Vape Pi</title>
//         <meta name="description" content="Shop incredible deals at Element Vape, a progressive online retail establishment serving the vaping community with mod kits, pod systems, ...." />
//         <meta name="keywords" content="vape, vape pi,vape-pi,vape shop,shop,e-commerce,smoke,myanmar,home,landing, keywords" />
//       </Helmet>
//             <div className="  w-full max-[500px]:h-[40px] bg-[#212121] " >
              
//             </div>
//             <div className=" flex h-auto items-center  w-[100%] flex-col gap-2 ">
//               <Home />
//               <div className=" flex h-auto max-[500px]:gap-5  w-[94%] items-center justify-center flex-col gap-6 ">
//                 <BestDeals />
//                 <Member />
//                 <NewReleased />
//                 <NewFlavor />
//                 <DevicesNew />
//                 <PodsNew />
//                 <DisposableNew />
//                 <Footer />
//               </div>
//             </div>
//           </div>
//     );
// }

// export default Landing
