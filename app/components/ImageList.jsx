"use client"
import React from 'react'
import ImageShow from './ImageShow'

function ImageList({images}) {
    const renderedImages=images.map((image,index)=>{
       return  <ImageShow key={index} image={image}/>   
    })
        //console.log(images[5].urls);
  return (
    <div className='flex justify-between mt-4 w-full flex-wrap'>
       {renderedImages}
    </div>
  )
}

export default ImageList