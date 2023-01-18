import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
import './Header.scss'
const Header = () => {
  // const [term, setTerm] = useState<string>("")
  const formRef = useRef<HTMLFormElement>(null)
  const todoInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('reff', todoInputRef.current?.value);
    if (todoInputRef.current?.value === "") {
      alert('Please enter search term!')
      return
    }
    dispatch(fetchAsyncMovies(todoInputRef.current?.value))
    dispatch(fetchAsyncShows(todoInputRef.current?.value))
    formRef.current?.reset()
    console.log('ICINDEKI',todoInputRef.current?.value);
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to='/'>
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form ref={formRef} onSubmit={submitHandler}>
          <input ref={todoInputRef} type="text" placeholder="Search Movies or Shows"
          /* onChange={e=>setTerm(e.target.value)} value={term} */ />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src='https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png' alt="user" />
      </div>
    </div>
  )
}

export default Header