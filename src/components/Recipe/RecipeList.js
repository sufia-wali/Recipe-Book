import React, { Fragment } from 'react';
import './RecipeList.css';
import Spinner from '../UI/Spinner';
import { useSelector, useDispatch } from "react-redux";
import { listDetail } from '../actions/itemActions';
import Error from '../Modal/Error';

function RecipeList() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, products, error, currentPage, pageSize } = productList


  const newProducts = products.slice(currentPage * pageSize - pageSize, currentPage * pageSize)
  const detailHandler = (id) => {
    dispatch(listDetail(id))
  }


  return (
    <Fragment>
      {
        newProducts.length ===0 ?
        (
          <div className='message'>
            <p>No recipes found for your query! Please try again </p>
          </div>
          )
        :
        loading
          ? (<Spinner />)
          : error
            ? (<Error children="Something Went Wrong" />)
            : (
              <div className='recipe-results'>
                <ul className='results'>
                  {newProducts.map((product) => {
                    return (
                      <li className="preview" key={product.id} onClick={() => detailHandler(product.id)}>
                        <span className="preview__link preview__link--active">
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
                        </span>
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