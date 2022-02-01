import React from 'react'
import Filho from './Filho'

export default props => {
    let x = 10
    let y = 20
    return (
        <>
            <Filho a={x}/>
            <Filho a={y + 1000}/>
        </>
    )
}