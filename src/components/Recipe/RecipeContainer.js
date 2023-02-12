import React, { useState } from 'react'
import './RecipeContainer.css';
import RecipeDetails from './RecipeDetails'
import test from '../../Image/test.jpg';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirection from './RecipeDirection';
import { useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';
import { Fragment } from 'react';

function RecipeContainer() {
  const selectedItem = useSelector(state => state.productDetail)
  const { loading, product, error } = selectedItem
  console.log(loading, product, error);
  console.log("all products", product);
  return (
    <div className='recipe'>
    {product['ingredients'].length ===0 ? (
      <div className='message'>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
      )
    : (
        loading ? (<Spinner/>)
        : error ? (<p>Something Went Wrong</p>)
        : (
          <Fragment>
          <RecipeDetails pdt={product} />
          <RecipeIngredients ingredient={product}/>
          <RecipeDirection />
          </Fragment>
          )
      )
    }
    </div>
  )
}

export default RecipeContainer
