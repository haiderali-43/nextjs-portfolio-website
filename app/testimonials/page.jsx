import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <div>
      
      <Image src={'/thumb1.jpg'} width={500} height={300} alt='' />
    </div>
  )
}

export default page
