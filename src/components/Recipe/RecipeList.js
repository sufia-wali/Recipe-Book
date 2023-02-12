import React, { Fragment } from 'react';
import './RecipeList.css';
import Spinner from '../UI/Spinner';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { listDetail } from '../actions/itemActions';
import RecipeContainer from './RecipeContainer';


function RecipeList() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, products, error, currentPage, pageSize } = productList
  // console.log(loading,products,error,currentPage,pageSize)


  const newProducts = products.slice(currentPage * pageSize - pageSize, currentPage * pageSize)
  // console.log(newProducts)
  const detailHandler = (id) => {
    // e.preventDefault()
    console.log(id);
    dispatch(listDetail(id))
  }


  return (
    <Fragment>
      {
        loading
          ? (<Spinner />)
          : error
            ? (<p>Something Went Wrong</p>)
            : (
              <div className='recipe-results'>
                <ul className='results'>
                  {newProducts.map((product) => {
                    return (
                      <li className="preview" key={product.id} onClick={() => detailHandler(product.id)}>
                        <a href="/" className="preview__link preview__link--active">
                          <figure className='preview__fig'>
                            <img src={product.image_url} alt="recipe" />
                          </figure>
                          <div className="preview__data">
                            <h4 className="preview__title">
                              {product.title}
                            </h4>
                            <p className="preview__publisher">{product.publisher}</p>
                            <div className="preview__user-generated">
                            </div>
                          </div>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
      }
    </Fragment>


  )
}

export default RecipeList