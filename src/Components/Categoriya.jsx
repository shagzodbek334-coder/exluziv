import React from 'react'
import "./Cat.css"

function Categoriya({ category }) {
    return (
        <div className="category-list">
            {category?.map((item, index) => (
                <div className="category-card" key={index}>
                    <div className="category-icon">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="category-name">
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categoriya