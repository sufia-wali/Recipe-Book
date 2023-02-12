import React from 'react'
import './Pagination.css';
import rightarrow from '../../Image/rightarrow.png';
import leftarrow from '../../Image/leftarrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../actions/itemActions';


function Pagination() {

  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.productList.currentPage);
  const pageSize = useSelector(state => state.productList.pageSize)
  const totalProducts = useSelector(state => state.productList.products.length);

  const prevHandler = (e) => {
    dispatch(setCurrentPage(currentPage - 1));
  }

  const nextHandler = (e) => {
    dispatch(setCurrentPage(currentPage + 1));
  }

  return (
    <div className='pagination'>
      <button className="btn--inline pagination__btn--prev"
        onClick={prevHandler}
        style={{ display: currentPage <= 1 ? 'none' : 'block' }}
      >
        <img
          src={leftarrow}
          alt="arrow"
          className="search__icon"
        />
        <span>Prev</span>
      </button>
      <button className="btn--inline pagination__btn--next"
        onClick={nextHandler}
        style={{ display: currentPage + 1 > Math.ceil(totalProducts / pageSize) ? 'none' : 'block' }}
      >
        <span>Next</span>
        <img
          src={rightarrow}
          alt="arrow"
          className="search__icon"
        />
      </button>
    </div>
  )
}

export default Pagination
