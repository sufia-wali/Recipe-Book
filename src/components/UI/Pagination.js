import React,{useState} from 'react'
import './Pagination.css';
import rightarrow from '../../Image/rightarrow.png';
import leftarrow from '../../Image/leftarrow.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../actions/itemActions';


function Pagination() {

  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.productList.currentPage);
  const pageSize = useSelector(state => state.productList.pageSize)
  const totalProducts = useSelector(state => state.productList.products.length);


  const pageCount = Math.ceil(totalProducts/pageSize)


  // const [page, setPage] = useState('1');
  const prevHandler = (e) =>{
    dispatch(setCurrentPage(currentPage - 1));
  }

  const nextHandler = (e) =>{
    dispatch(setCurrentPage(currentPage + 1));
  }


  return (
    <div className='pagination'>
      <button className="btn--inline pagination__btn--prev"
       onClick={prevHandler}
       disabled = {currentPage === 1}
       >
        <img src={leftarrow} alt="arrow" className="search__icon" />
        <span>Prev</span>
      </button>
      <button className="btn--inline pagination__btn--next"
       disabled = {currentPage === pageCount}
       onClick={nextHandler}
      >
        <span>Next</span>
        <img src={rightarrow} alt="arrow" className="search__icon" />
      </button>
    </div>
  )
}

export default Pagination
