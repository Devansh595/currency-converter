async function useCurrencyInfo(){
  try {
     const resopnse =  await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_A80l7V5lnvuGB2QS4vCHR1e5Om8Wqjyim7mOerNa')
     const data = await resopnse.json()  
     return data.data
  } catch (error) {
    
  }
}
export default useCurrencyInfo;