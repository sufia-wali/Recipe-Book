import React, {Fragment} from 'react'
import './RecipeDetails.css';
import time from '../../Image/time.png';
import user from '../../Image/user.png';
import minus from '../../Image/minus.png';
import plus from '../../Image/plus.png';
import bookmark from '../../Image/bookmark.png';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../actions/itemActions';

function RecipeDetails({pdt}) {
  const dispatch = useDispatch()
  const whisListHandler = ()=>{
    dispatch(addToWishlist(pdt))
  }
  return (
    <Fragment>
    <figure className='recipe__fig'>
            <img src={pdt.image_url} alt="test" className='recipe__img' />
            <h1 className="recipe__title">
              <span>{pdt.title}</span>
            </h1>
          </figure>
    <div className='recipe__details'>
      <div className="recipe__info">
        <img src={time} alt="time" className="recipe__info-icon" />
        <span className="recipe__info-data recipe__info-data--minutes">{pdt.cooking_time}</span>
        <span className="recipe__info-text">minutes</span>
      </div>

      <div className="recipe__info">
        <img src={user} alt="user" className="recipe__info-icon" />
        <span className="recipe__info-data recipe__info-data--people">{pdt.servings}</span>
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
      <button className="btn--round" onClick={whisListHandler}>
        <img src={bookmark} alt="bookmark" />
      </button>
    </div>
    </Fragment>
  )
}

export default RecipeDetails
