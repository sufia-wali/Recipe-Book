import React, { useState } from 'react'
import './RecipeContainer.css';
import RecipeDetails from './RecipeDetails'
import test from '../../Image/test.jpg';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirection from './RecipeDirection';
import { useSelector } from 'react-redux';

function RecipeContainer() {
  const selectedItem = useSelector(state => state.productDetail)
  const { loading, products, error } = selectedItem

  console.log(loading, products, error)
  return (
    <div className='recipe'>
        <div className="message">
          <p>Start searching for a recipe 😋... </p>
        </div>
          <figure className='recipe__fig'>
            <img src={test} alt="test" className='recipe__img' />
            <h1 className="recipe__title">
              <span>Pasta with tomato cream sauce</span>
            </h1>
          </figure>
          <RecipeDetails />
          <RecipeIngredients />
          <RecipeDirection />
    </div>
  )
}

export default RecipeContainer
