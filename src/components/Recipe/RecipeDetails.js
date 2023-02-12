import React, {Fragment, useState, useEffect} from 'react'
import './RecipeDetails.css';
import time from '../../Image/time.png';
import user from '../../Image/user.png';
import minus from '../../Image/minus.png';
import plus from '../../Image/plus.png';
import bookmark from '../../Image/bookmark.png';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist, updateIngredient } from '../actions/itemActions';



function RecipeDetails({pdt,serv}) {

  const [flag,setFlag] = useState(true)
  // console.log(pdt);
  const [serving,setServing] = useState(pdt.servings)
  const dispatch = useDispatch()

  const whisListHandler = ()=>{
    setFlag(()=>!flag)
    if(flag){
      dispatch(addToWishlist(pdt))
    }
    else{
      dispatch(removeFromWishlist(pdt.id))
    }
  }

  const incServing = ()=>{
    setServing(()=>serving+1)
    serv(serving)
  }

  const decServing = ()=>{
    setServing(()=>serving-1)
    serv(serving)
  }

  // useEffect(() => {
  //   console.log(serving);
  //   dispatch(updateIngredient(serving))

  // }, [serving,dispatch])

  // const[count, setCount] = useState()


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
        <span className="recipe__info-data recipe__info-data--people" >{serving}</span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button className="btn--tiny btn--increase-servings" onClick={decServing}>
            <img src={minus} alt="minus" />
          </button>
          <button className="btn--tiny btn--increase-servings" onClick={incServing}>
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
