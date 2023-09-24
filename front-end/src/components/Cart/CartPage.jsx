import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import "./cart.css"
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
    const navigate = useNavigate();

    const handleBackDogsPage = () => {
        navigate("/dogs")
    }

    const handleBackHome = () => {
        navigate("/")
    }

    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}])
    }
    const { myCart, total, addToCart, setTotal } = useContext(CartContext)
    return (
        <>
            <section className='cart-container'>
                <div className='cart-header'>CHECKOUT :</div>
                <div className='cart-items'>
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className='cart-items'>
                                <img src={item.imageUrl} className='cart-item-img' alt="error" />
                                {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className='cart-total'>TOTAL: {total}$ </div>
                </div>
                <button className='cart-checkout' onClick={handleCheckout}>DONE</button>
                <button className='cart-gohome' onClick={handleBackHome}>RETURN HOME</button>
                <button className='cart-gohome' onClick={handleBackDogsPage}>RETURN DOGS PAGE</button>

            </section>
        </>
    )
}

export default CartPage
