import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksCharts from './components/MarksChart/MarksCharts'


const pricingPromise = fetch("./pricingData.json").then(res => res.json())
const marksPromise = axios.get('./marksData.json');

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
       <Suspense fallback ={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise= {pricingPromise}></PricingOptions>
       </Suspense>
      </main>

      <Suspense fallback = {<span className="loading loading-spinner loading-lg"></span>}>
        <MarksCharts marksPromise={marksPromise} ></MarksCharts>
      </Suspense>
      <ResultChart></ResultChart>

    </>
  )
}

export default App
