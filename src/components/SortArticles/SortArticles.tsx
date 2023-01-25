import React, { useState } from 'react'
import './SortArticles.scss'
import blogsArray from '../Blogs/BlogsArray'
type Props = {}
const SortArticles = (props: Props) => {
   return (
      <>
         <div className="wrapper-sort-btn">
            <button id="art">ART</button>
            <button id="nature">NATURE</button>
            <button id="space">THE SPACE</button>
            <button id="urban">URBAN</button>
            <button id="adventure">ADVENTURE</button>
            <button id="lftips">LIFESTYLE&TIPS</button>
            <button id="tech">TECHNOLOGIES</button>
         </div>
      </>
   )
}
export default SortArticles