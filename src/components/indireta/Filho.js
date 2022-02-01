import React from 'react'
import {Button, Text} from 'react-native'
import Estilo from '../estilo'

export default props => {
    let geraNumero = (min, max) => {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }
    return (
        <>
            <Button 
                title='Executar'
                onPress={() => {
                    const n = geraNumero(props.min, props.max)
                    props.funcao(n)
                }}
            />
        </>
    )
}