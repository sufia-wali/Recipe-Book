import React, { Fragment, useState } from 'react'
import './Header.css';
import logo from '../../Image/logo.webp';
import search from '../../Image/search.png';
import bookmark from '../../Image/bookmark.png';
import add from '../../Image/add.png';
import { useDispatch, useSelector } from 'react-redux';
import { listItem } from '../actions/itemActions';
import Error from '../Modal/Error';


export default function Header() {

  const cart = useSelector(state => state.wishList)
  const { cartItems } = cart
  console.log(cartItems);

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listItem(text))
    setText('')
  }

  return (
    <Fragment>
      <header className='header'>
        <img src={logo} alt='logo' className='header__logo' />
        <form className='search' onSubmit={submitHandler}>
          <input type="text" className='search__field' placeholder='Search recipes...' value={text} onChange={changeHandler} />
          <button className="btn search__btn">
            <img className='search__icon' src={search} alt="search" />
            <span>Search</span>
          </button>
        </form>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__btn nav__btn--add-recipe">
                <img src={add} alt="icon" className="nav__icon" />
                <span>Add recipe</span>
              </button>
            </li>

            <li className="nav__item">
              <button className="nav__btn nav__btn--bookmarks">
                <img src={bookmark} alt="bookmark" className='nav__icon' />
                <span>Bookmarks</span>
              </button>

              <div className="bookmarks">
                {cartItems.length === 0 ?
                  (
                    <div className="message">
                      <Error children="No bookmark yet, Find a recipe and bookmark it!" />
                    </div>
                  ) : (
                    <ul className="bookmarks__list">
                      {cartItems.map((item) => {
                        return (
                          <li className='preview'>
                            <span className="preview__link preview__link--active">
                              <figure className="preview__fig">
                                <img src={item.image_url} alt="img" />
                              </figure>
                            <div className="preview__data">
                              <h4 className="preview__title">{item.title}</h4>
                              <p4 className="preview__publisher">{item.publisher}</p4>
                            </div>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}
