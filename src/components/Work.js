import "./WorkCardStyle.css"

import React from 'react'
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
// import coloursharp from '../assets/color-sharp.png'


/*
Plan:
-----------------------------------------------
                MY WORK //show or blink this then hide 
  
                the complete component will b hidden and will be shown after click

    .....{and other cards}

-----------------------------------------------
 */
// https://codesandbox.io/s/lccxwh?file=/src/App.tsx


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
    Projects
        </h1>
        <div className="project-container">
            {
                WorkCardData.map((val,ind)=>{
                    return(
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })
            }
        </div>
        {/* <img className='background-img-left' src={coloursharp}/> */}
    </div>
  )
}

export default Work