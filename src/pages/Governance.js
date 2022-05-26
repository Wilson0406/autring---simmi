import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function Governance() {
    const [firstGovernanceData,setFirstGovernanceData]=useState();
    const [secGovernanceData,setSecGovernanceData]=useState();
    const [thirdGovernanceData,setThirdGovernanceData]=useState();
    const [fourthGovernanceData,setFourthGovernanceData]=useState();

 
  const url1=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&q=governance&country=in&language=en&page=0`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&q=government&country=in&language=en&page=1`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&q=government&country=in&language=en&page=2`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&q=government&country=in&language=en&page=3`
  
  const apiData1=()=>{
    axios.get(url1).then((response)=>{
          
           setFirstGovernanceData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{
          
           setSecGovernanceData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{
          
           setThirdGovernanceData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{
          
           setFourthGovernanceData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

   useEffect(()=>{
    apiData1();
    apiData2();
    apiData3();
    apiData4();
  
   },[])
  
  return (
    <>
       <MainStore data={firstGovernanceData} s_data={secGovernanceData} t_data={thirdGovernanceData} f_data={fourthGovernanceData}></MainStore>
    </>
  )
}

export default Governance;