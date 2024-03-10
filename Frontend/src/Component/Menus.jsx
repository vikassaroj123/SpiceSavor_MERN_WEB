import React from 'react'
import { data } from '../restAPI.json'
const Menus = () => {
    return (
        <section className='menu' id='menu'>
            <div className="container">
                <div className="heading_section">
                    <h1 className='heading'>POPULAR DISHES</h1>
                    <p>Welcome to SpiceSavor! Indulge in authentic Indian flavors with our diverse menu featuring aromatic biryanis, spicy curries, and mouthwatering tandoori specialties. Experience the essence of India!</p>
                </div>
                <div className="dishes_container">
                  {
                    data[0].dishes.map(element =>{
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                  }
                </div>
            </div>
        </section>
    )
}

export default Menus