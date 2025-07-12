import React, { useState } from 'react';
import { useEffect } from 'react';

const ActiveCoin = ({turn,dropped,setDropped,setTurn}) => {

    const [column,setColumn] = useState(2)
    const[row,setRow] = useState()

    const handleKeyDown = e => {
        if(e.key === 'ArrowLeft' && column > 0) 
            setColumn(column -1)
        else if(e.key === 'ArrowRight'){
            if (column === undefined)
                setColumn(1)
            else if (column < 6)
                setColumn(column + 1)
        }
        else if (e.key === 'Enter' || e.key === ' ') {
            if (dropped.find(drop => drop.x === 0 && drop.y === (column||0))) {
                return
            }
            const len = 5 - dropped.filter(drop => drop.y === (column || 0)).length
            setRow(len)
            setTimeout(() => {
                setDropped([
                    ...dropped,
                    {x: len, y:column || 0, player: turn}
                ])
                setTurn(turn === 1 ? 2 : 1)
            }, 500)
        }
    }

    useEffect(() => {
        setColumn()
        setRow()
    },[turn])

    useEffect(() => {
        document.addEventListener('keyup',handleKeyDown,false)

        return () => document.removeEventListener('keyup', handleKeyDown)
    })

    return <div className={`active p${turn} column-${column||'-'} row-${row===undefined ? '-' : row}`} />
}

export default ActiveCoin