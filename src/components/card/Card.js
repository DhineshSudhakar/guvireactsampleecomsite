import React, { useEffect, useState } from 'react'
import "./style.css"

function Card({ card, inCart, setInCart }) {
    const [btnDisable, setBtnDisables] = useState(false)

    useEffect(() => {
        if (inCart === 0) {
            setBtnDisables(false)
        }
    }, [inCart])


    function handleClick(e) {
        e.preventDefault()
        setInCart(inCart + 1)
        setBtnDisables(true)
    }

    function generateStars(rating) {
        let result = ""
        for (let i = 0; i < rating; i++) {
            result = result + "&#9733"
        }
        return <div>
            {
                [...Array(rating)].map((ele, index) => {
                    return <i key={index} className="fa fa-star" ></i>
                })
            }
        </div>
    }
    return (
        <div className="card">
            <div className="card-img-top">450 x 300</div>
            { card.sale && <button className="sale-btn badge bg-dark">Sale</button>}
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {
                    card.rating && <p>{generateStars(parseInt(card.rating))}</p>
                }
                {
                    card.price_range ?
                        (
                            <p>${" "}{parseInt(card.price_range.split("-")[0]).toFixed(2)} - ${" "}{parseInt(card.price_range.split("-")[1]).toFixed(2)}</p>
                        ) :
                        (
                            <p>${" "}{parseInt(card.price).toFixed(2)}</p>
                        )
                }

            </div>
            <div className="card-footer">
                <button
                    className="btn btn-outline-dark"
                    disabled={btnDisable}
                    onClick={handleClick}
                >
                    {card.price_range ? 'View options' : 'Add to cart'}
                </button>
            </div>
        </div>
    )
}

export default Card
