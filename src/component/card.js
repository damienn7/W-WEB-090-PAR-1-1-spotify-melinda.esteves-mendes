import React from "react";
import "./card.css";


const Card = ({name, description, image}) => {
    return (
        <div className="card">
            <img src={image} />
            <div className="card-content">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;