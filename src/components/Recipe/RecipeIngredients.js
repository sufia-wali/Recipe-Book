import React from 'react'
import bullet from '../../Image/bullet.png';
import './RecipeIngredients.css';
import fracty from 'fracty';

function RecipeIngredients({ ingredient,val }) {

  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
        {ingredient['ingredients'].map((item, index) => {
          let newServings = fracty((item.quantity * val)/ingredient.servings);
          return (
            <li className="recipe__ingredient" key={index}>
              <img src={bullet} alt="bullet" className="recipe__icon" />
              <div className="recipe__quantity">
              {item.quantity ? newServings : ''}
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
