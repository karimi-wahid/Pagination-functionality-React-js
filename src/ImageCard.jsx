import { data } from 'autoprefixer'
import React from 'react'

const ImageCard = ({ data }) => {
    return (
        <div className='w-full flex justify-evenly items-center flex-wrap gap-3 my-5'>
            {data.map((curImage, index) => (
                <div className='w-[200px] h-[400px]' key={index}>
                    <img src={curImage.download_url} alt="image" className='h-full w-full object-cover rounded-md hover:scale-110 hover:rotate-1' />
                </div>
            ))}
        </div>
    )
}

export default ImageCard