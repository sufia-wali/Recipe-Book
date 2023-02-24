import React from 'react'
import bullet from '../../Image/bullet.png';
import './RecipeIngredients.css';
import Fracty from '../UI/Fracty';

function RecipeIngredients({ ingredient,val }) {

  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
        {ingredient['ingredients'].map((item, index) => {
          return (
            <li className="recipe__ingredient" key={index}>
              <img src={bullet} alt="bullet" className="recipe__icon" />
              <div className="recipe__quantity">
              {item.quantity ? <Fracty numerator={item.quantity*val} denominator={ingredient.servings} />: ''}
              </div>
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
