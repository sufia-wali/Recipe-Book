import React, { Fragment,useState } from 'react'
import './RecipeContainer.css';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirection from './RecipeDirection';
import { useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';
import Error from '../Modal/Error.js';

function RecipeContainer() {
  const selectedItem = useSelector(state => state.productDetail)
  const { loading, product, error } = selectedItem;

  const [updatedServings,setUpdatedServings] = useState(4);

  const servingHandler = (updatedValue) =>{
    setUpdatedServings(updatedValue);
  }

  return (
    <div className='recipe'>
      {product['ingredients'].length === 0
      ? (
        <div className='message'>
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
        )
      : (
          loading ? (<Spinner />)
            : error ? (<Error children="Something Went Wrong"/>)
              : (
                <Fragment>
                  <RecipeDetails pdt={product} serv={servingHandler} />
                  <RecipeIngredients ingredient={product} val={updatedServings} />
                  <RecipeDirection />
                </Fragment>
              )
        )
      }
    </div>
  )
}

export default RecipeContainer
