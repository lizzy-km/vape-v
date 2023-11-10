import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import './App.css'
import BestDeals from './components/BestDeals'
import DevicesNew from "./components/DevicesNew";
import DisposableNew from "./components/DisposableNew";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Member from './components/Member'
import NewFlavor from './components/NewFlavor'
import NewReleased from './components/NewReleased'
import PodsNew from "./components/PodsNew";
import useResponsive from "./components/useResponsive";

const App = () => {

  const client = new QueryClient();
  const { mobile, tablet, desktop } = useResponsive();

  return (
    <QueryClientProvider client={client}>
      <div className=" relative flex w-full overflow-y-auto max-h-screen " >
      <Header />
      <div className="  flex flex-col  w-full h-auto " >
        {/* {
          mobile &&  <div className=" bg-[url('/public/images/navBg.svg')] flex justify-center items-center w-full h-[40px]  " >
          <img className=" w-full h-full object-bottom " src="/public/images/navBg.svg" alt="" />
          </div>
        } */}
       
        <div className=" flex  w-full flex-col gap-5 " >
        <Home />
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
     
      {/* 
      <NewReleased />
      <NewFlavor />
      <DevicesNew />
      <PodsNew />
      <DisposableNew />
      <Footer /> */}
    </QueryClientProvider>
  )
}

export default App
