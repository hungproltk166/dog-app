import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import "./dogs.css"
const DogCard = (props) => {
    const { id, name, breed, price, description, imageUrl } = props;
    const { addToCart, setTotal } = useContext(CartContext)
    const [isAdded, setAdded] = useState(false)
    const handleAdded = () => {
        setAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
        }
        addToCart((item) => [...item, newItems])
        setTotal((total) => (total += Number(price)))
    };
    console.log("log", isAdded)
    return (
        <>
            <section className='dogs'>
                <div className='dogs-info'>
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className='dogs-img-container'>
                    <img className='dog-img' src={imageUrl} alt={`picture of ${name}`} />
                </div>
                <div className='dogs-desc'>{description}</div>
                <div className='dogs-price'>{price}$</div>
                {isAdded ? (
                    <button disabled className='dogs-btn-disabled' >ADDED...</button>
                ) : (<button className='dogs-btn' onClick={handleAdded}>ADD TO CART</button>)}

            </section>
        </>
    )
}

export default DogCard
