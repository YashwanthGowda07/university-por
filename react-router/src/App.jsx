import React, {} from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import ContactUs from './pages/contactUs'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/book-list">Book List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/book-list' element={<BookList />} />
        <Route path='/book/:id' element={<Book />} />
      </Routes>
    </>
  )
}
export default App
