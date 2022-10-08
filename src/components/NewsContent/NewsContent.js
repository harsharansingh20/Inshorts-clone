import { Container, containerClasses } from '@mui/system'
import React from 'react'
import "./NewsContent.css"

const newscontent = () => {
  return (

<Container>
<div className="content">
  <div className="downloadmsg">
    <span>For the best experience use inshorts app on your smartphone</span>

    <img className='logo' src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" srcset="" />

    <img className='logo' src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" srcset="" />

  </div>
</div>
</Container>
    
    )
}

export default newscontent