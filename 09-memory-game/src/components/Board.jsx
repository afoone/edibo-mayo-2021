import React from 'react'
import './Board.css'
import Card from './Card'

const Board = ({cols}) => {

console.log(cols)

    const templateGrid = "auto ".repeat(cols)
    console.log(templateGrid)

    const createCards = (n) => {
        const response = []
        for (let index = 0; index < n; index++) {
            response.push(<Card/>)            
        }
        return response
    }

    return (
        <div className="board" style={{gridTemplateColumns: templateGrid}}>
            {
                createCards(cols*cols)
            }
        </div>
    )
}

export default Board
