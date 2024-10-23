import React from 'react'

const Pagination = ({ currentPage, setCurrentPage }) => {

    const PrevThreePage = Array.from({ length: 3 }, (_, index) => currentPage - 1 - index).filter((value) => value > 0).reverse()
    const NextThreePage = Array.from({ length: 4 }, (_, index) => currentPage + index)

    const paginationPagesArr = [...PrevThreePage, ...NextThreePage];

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }
    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    }

    return (
        <div className='flex w-[450px] justify-around items-center'>

            { currentPage > 1 ? 
            <button
                onClick={handlePrev}
                className='px-3 py-2 p-2 m-3 bg-black text-white rounded-md hover:scale-50'>{"<"}
                </button>
                : '' 
            }
            
            {paginationPagesArr.map((value, index) => (
                <button
                    onClick={() => setCurrentPage(value)}
                    key={index}
                    className={currentPage === value ? 'px-3 py-2 p-2 m-3 bg-white text-black rounded-md border border-black' : 'px-3 py-2 p-2 m-3 bg-black text-white rounded-md'}>{value}</button>
            ))}
            <button
                onClick={handleNext}
                className='px-3 py-2 p-2 m-3 bg-black text-white rounded-md hover:scale-50'>
                {">"}
            </button>
        </div>
    )
}

export default Pagination