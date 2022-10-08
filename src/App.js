import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NewsContent from "./components/NewsContent/NewsContent"
import apiKey from './components/data/config';

const App = () => {

const [category , setCategory ] = useState("General");
const [newsArray , setnewsArray] = useState([]);
const [newsResults , setnewsResult] = useState();


const newsApi = async()=>{

try {

  const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}`)
setnewsArray(news.data.articles);
setnewsResult(news.data.totalResults);
  
} catch (error) {
  console.log("error")
}

};

useEffect(() => {

  newsApi();

}, [newsResults,category])


  return (
    <div>
      <Navbar setCategory = {setCategory} />
      <NewsContent/>
    </div>
  )
}

export default App