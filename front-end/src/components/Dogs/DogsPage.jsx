import React from 'react'
import DogCard from './DogCard'
import "./dogs.css"


const DogsPage = (props) => {
    const { allDog } = props
    return (
        <>
            <section className='dogs-container'>
                {allDog.map((Dog) => {
                    return (
                        <div key={Dog.id}>
                            <DogCard
                                id={Dog.id}
                                name={Dog.name}
                                breed={Dog.breed}
                                price={Dog.price}
                                description={Dog.description}
                                imageUrl={Dog.imageUrl} />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default DogsPage
