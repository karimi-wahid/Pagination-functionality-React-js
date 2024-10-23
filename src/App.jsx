import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Pagination from './Pagination'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const getImage = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`);
    setData(res.data)
  }

  useEffect(() => {
    
    getImage();

  }, [currentPage])

  return (
    <div className='w-full grid place-items-center p-5'>
      <ImageCard data={data} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
