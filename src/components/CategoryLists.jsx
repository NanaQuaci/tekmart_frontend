import React from 'react'
import { Link } from 'react-router-dom'
const CategoryLists = () => {
  return (
    <div className="header py-2">
    <div className="wrapper d-flex justify-content-center">

    <div className="d-flex">
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>COMPUTING</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>FASHION</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>SHOES</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>TABLETS</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>HEALTH</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>ELECTRONICS</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>STATIONERY</strong>
    </Link>
    <Link to="" className="text-decoration-none text-black px-3">
            <strong>PROVISIONS</strong>
    </Link>
    </div>

    </div>
      
    </div>
  )
}

export default CategoryLists
