import React,{Fragment} from 'react'
import './Header.css';
import logo from '../../Image/logo.webp';
import search from '../../Image/search.png';
import nobookmark from '../../Image/nobookmark.png';
import bookmark from '../../Image/bookmark.png';
import add from '../../Image/add.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listItem } from '../actions/itemActions';


export default function Header() {

  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const changeHandler =(e)=>{
    setText(e.target.value);
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(listItem(text))
    setText('')

  }



  return (
    <Fragment>
      <header className='header'>
        <img src={logo} alt='logo' className='header__logo' />
        <form className='search' onSubmit={submitHandler}>
          <input type="text" className='search__field' placeholder='search recipes...' value={text} onChange={changeHandler} />
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
                <ul className="bookmarks__list">
                  <div className="message">
                    <div>
                      <img src={nobookmark} alt="nobookmakr" />
                    </div>
                    <p>No bookmarks , Find a recipe and bookmark it.</p>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}
