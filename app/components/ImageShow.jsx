import React from 'react'
import Image from 'next/image';
function ImageShow({image}) {
  return (
    <div className=''>
        <Image src={`${image.urls.small}`} width={300} height={200}  alt="asd" />
    </div>
  )
}

export default ImageShow