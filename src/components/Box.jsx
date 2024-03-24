import React from "react";
import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrrencyInfo";

const CurrencyRates = await useCurrencyInfo()

function Box(){
  
   const [amt,setAmt] = useState()
   const [from,setFrom] = useState('USD')
   const [to,setTo] = useState('INR')
   const [convertedAMt,setConvertedAmt] = useState()

   function convert(){

    const fromvalue = CurrencyRates[from]
    const tovalue = CurrencyRates[to]

    const conv = (amt/fromvalue)*tovalue;
    setConvertedAmt(conv)

    

   }






    return(

    <div className="flex-col bg-zinc-200 h-auto w-auto p-5 justify-center  border-2 rounded-md shadow-lg shadow-cyan-600 ">

      <div className="flex justify-center items-center" >
                <h1 className="text-2xl font-bold text-black">Currency Convertor</h1>
      </div>

      <form  onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
      <div className="mt-10">

          <div className="flex-col  ">
                  <div className="mt-2">
                     <label htmlFor="amt">Enter value</label>
                      <input className="flex items-center px-3 py-1 w-96"
                       type="number" 
                       value={amt} 
                       onChange={(e) => setAmt(Number(e.target.value))}
                       id="amt" 
                        />
                  </div>

                  <div className="mt-2">
                  <label htmlFor="from">from</label>
                  <select className="w-40 ml-3"
                    value={from} 
                    onChange={(e)=>setFrom(e.target.value)}
                    id="from">
                    
                    { Object.keys(CurrencyRates).map((currency)=>(
                         <option key={currency} value={currency}>{currency}</option>
                      )) }
                         
                    
                  </select>
                  </div>

                  <div className="mt-2">
                  <label htmlFor="to">to</label>
                  <select className="w-40 ml-3 " name="" id=""
                    value={to}
                    onChange={(e)=>setTo(e.target.value)} 
                    >
                      {  Object.keys(CurrencyRates).map((currency)=>(
                         <option key={currency} value={currency}>{currency}</option>
                      )) }
                  </select>
                  </div>

                  <div className="mt-2">
                  <label htmlFor="conVal">Converted value</label>
                  <input className="flex items-center px-3 py-1 w-96" type="number" value={convertedAMt} 
                  onChange={(e)=>setConvertedAmt(e.target.value)}
                  id="conVal"  />

                  </div>
          </div>
          
         <div className="flex justify-center items-center mt-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 ... flex justify-center items-center my-2 border-2 rounded-lg p-2 hover:text-white hover:scale-110"
           type="submit"
          >
                Convert
           </button>
         </div>

       </div> 

       </form>



    </div>

    )

}

export default Box;