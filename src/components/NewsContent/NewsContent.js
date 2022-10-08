import { Container, containerClasses } from '@mui/system'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./NewsContent.css"


const newscontent = (newsArray,newsResults) => {
  return (

<Container>
<div className="content">
  <div className="downloadmsg">
    <span>For the best experience use <b>inshorts</b> app on your smartphone</span>

    <img className='logo' src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" srcset="" />

    <img className='logo' src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" srcset="" />

  </div>

{newsArray.map((newsItem)=>(

<NewsCard newsItem={newsItem} key={newsItem.title} />

))}


</div>
</Container>


    
    )
}

export default newscontent