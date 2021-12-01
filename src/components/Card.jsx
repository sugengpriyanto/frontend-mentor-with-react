import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <img src={props.image} alt={props.title} />
        </div>
    )
}

export default Card
