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

const App = () => {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className=" relative flex w-full overflow-y-auto max-h-screen " >
      <Header />
      <div className="  flex flex-col  w-full h-auto " >
       
       
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
     
    
    </QueryClientProvider>
  )
}

export default App
