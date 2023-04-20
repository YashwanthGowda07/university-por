import React from 'react'
import { Link } from 'react-router-dom'

export default function BookList() {
  return (
    <>
        <h1>BookList</h1>
        <Link to="/book/1">Book1</Link>
        <Link to="/book/2">Book2</Link>
    </>
  )
}
