import React from 'react'

const data = [
    {
        id: 0,
        title: "Supervisor",
        content: "Monitors activity to identify project roadblocks",
        image: 'images/icon-supervisor.svg'
    },
    {
        id: 0,
        title: "Team Builder",
        content: "Scans our talent network to create the optimal team for your project",
        image: 'images/icon-team-builder.svg'
    },
    {
        id: 0,
        title: "Karma",
        content: "Regularly evaluates our talent to ensure quality",
        image: 'images/icon-karma.svg'
    },
    {
        id: 0,
        title: "Calculator",
        content: "Uses data from past projects to provide better delivery estimates",
        image: 'images/icon-calculator.svg'
    },
]

function Card(props) {
    return (
        <div className={'card ' + props.cardcolor}>
            <h1 className='title'>{props.title}</h1>
            <p className='content'>{props.content}</p>
            <img className='icons' src={props.image} alt={props.title} />
        </div>
    )
}

function Cards() {
    return (
        <div className='row'>
            <Card cardcolor="blue" title={data[0].title} content={data[0].content} image={data[0].image} />
            <div className="wrap">
                <Card cardcolor="red" title={data[1].title} content={data[1].content} image={data[1].image} />
                <Card cardcolor="yellow" title={data[2].title} content={data[2].content} image={data[2].image} />
            </div>
            <Card cardcolor="skyblue" title={data[3].title} content={data[3].content} image={data[3].image} />
        </div>
    )
}

export default Cards

