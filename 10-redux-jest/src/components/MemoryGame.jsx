import React from 'react'
import Board from './Board'

const MemoryGame = () => {
    return (
        <div>
            <h1>Memory Game</h1>
            <Board cols={4}/>
        </div>
    )
}

export default MemoryGame
