import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import MainStore from '../MainStore'

function International() {
    const [firstIntData,setFirstIntData]=useState();
    const [secIntData,setSecIntData]=useState();

 
//   const url=`https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=4583328f31604630a0ce81abaf0821ab`
    const url = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=5d74cd0257614279a002b327c050174e`
    const url2 = `https://newsapi.org/v2/top-headlines?language=en&apiKey=5d74cd0257614279a002b327c050174e`
    // const url = `https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&category=top&language=en`
    // const url2=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&category=world`


//   const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {category: 'world', cc: 'IN', safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'Accept-Language': 'en',
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//       'X-RapidAPI-Key': '51b9d667a5msh31a33c4c03ab222p101239jsn382ac4f1bfd1'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });



  const apiData=()=>{
    axios.get(url2).then((response)=>{
          
           setFirstIntData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData2=()=>{
    axios.get(url).then((response)=>{
          
           setSecIntData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
  }


    useEffect(()=>{
        apiData();
        apiData2();  
   },[])
  
  return (
    <>
       <MainStore data={firstIntData} s_data={secIntData}></MainStore>
    </>
  )
}

export default International