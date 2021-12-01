import React from 'react'
import Card from './Card'

function Cards(props) {
    const allCards = props.data.map((d) => {
        return (
          <Card key={d.id} title={d.title} content={d.content} image={d.image} />
        )
    })
    return (
        <div>
            {allCards}
        </div>
    )
}

export default Cards

