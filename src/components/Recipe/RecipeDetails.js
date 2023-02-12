import React from 'react'
import './RecipeDetails.css';
import time from '../../Image/time.png';
import user from '../../Image/user.png';
import minus from '../../Image/minus.png';
import plus from '../../Image/plus.png';
import bookmark from '../../Image/bookmark.png';

function RecipeDetails() {
  return (
    <div className='recipe__details'>
      <div className="recipe__info">
        <img src={time} alt="time" className="recipe__info-icon" />
        <span className="recipe__info-data recipe__info-data--minutes">60</span>
        <span className="recipe__info-text">minutes</span>
      </div>

      <div className="recipe__info">
        <img src={user} alt="user" className="recipe__info-icon" />
        <span className="recipe__info-data recipe__info-data--people">4</span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button className="btn--tiny btn--increase-servings">
            <img src={minus} alt="minus" />
          </button>
          <button className="btn--tiny btn--increase-servings">
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>

      <div className="recipe__user-generated">
        <img src={user} alt="user" />
      </div>
      <button className="btn--round">
        <img src={bookmark} alt="bookmark" />
      </button>
    </div>


  )
}

export default RecipeDetails
