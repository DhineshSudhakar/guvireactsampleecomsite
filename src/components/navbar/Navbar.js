import React, { useState } from 'react'

import './style.css'

function Navbar({ inCart, setInCart }) {

    function handleClick(e) {
        e.preventDefault()
        setInCart(0)
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button
                                className="btn"
                                onClick={handleClick}
                            ><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                {" "}Cart{" "}<span className="cartValue badge rounded-pill bg-dark">{inCart}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
