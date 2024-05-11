import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
    let pages=[];
    let totalPages=Math.ceil(totalPosts/postsPerPage);
    console.log(totalPages);
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
       pages.push(i);
    }
    const handlePageNumber = (currentPage) => {
        setCurrentPage(currentPage);
    };
  return (
    <div className='pagination'>
        <button
          onClick={() => handlePageNumber(currentPage - 1)}
          disabled={currentPage === 1} className='prev_next'
        >
          &laquo;
        </button>
    {
        pages.map((page,index)=>{
            return <button key={index} onClick={()=>setCurrentPage(page)} className={page===currentPage?'active':'pages'} >{page}</button>
        })
    }
     <button
          onClick={() => handlePageNumber(currentPage + 1)}
          disabled={currentPage === totalPages} className='prev_next'
        >
          &raquo;
        </button>
  </div>
  )
}

export default Pagination
