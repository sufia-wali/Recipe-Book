import React from 'react'
import bullet from '../../Image/bullet.png';
import './RecipeIngredients.css';
import { useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';



function RecipeIngredients({ingredient}) {
  // console.log("product" , pdt.ingredients[0]);
  // const selectedItem = useSelector(state => state.productDetail)
  // const {loading, product, error} = selectedItem

  console.log("ingrdient", ingredient);
  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            {ingredient['ingredients'].map((item)=>{
              return (
                <li className="recipe__ingredient">
                <img src={bullet} alt="bullet" className="recipe__icon" />
                <div className="recipe__quantity">{item.quantity}</div>
                <div className="recipe__description">
                  <span className="recipe__unit">{item.unit}</span>
                  {item.description}
                </div>
              </li>
              )
            })}
          </ul>
    </div>
  )
}

export default RecipeIngredients
