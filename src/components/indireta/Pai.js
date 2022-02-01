import React, {useState} from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [numero, setNumero] = useState(0)
    const [texto, setTexto] = useState('')

    let exibeValor = (numero,texto) => {
        setNumero(numero)
        setTexto(texto)
    }
    return (
        <>
            <Text style={estilo.fontG}>
                {texto}{numero}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibeValor}
            />
        </>
    )
}