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
  const [S,setS] = useState(product.servings)

  // const updatedIng = useSelector(state => state.)
  // console.log(updatedIng);
  const servingHandler = (v) =>{
    setS(v)
    console.log(S);
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
                  <RecipeIngredients ingredient={product} val={S} />
                  <RecipeDirection />
                </Fragment>
              )
        )
      }
    </div>
  )
}

export default RecipeContainer
