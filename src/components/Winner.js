const Winner = ({winner,reset}) => {
    return <p>
        {winner === -1
        ? <span>It's a Draw!</span>
        : <span>Player {winner} has Won!</span>
    }
        <button onClick={reset}>Play Again?</button>
    </p>
}

export default Winner