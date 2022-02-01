import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
// import Primeiro from './components/Primeiro'
// import X, { Comp1, Comp2 } from './components/Mullti'
// import MinMax from './components/MinMax'
//import Titulo from './components/Titulo'
// import Botao from './components/Button'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'

export default () => (
    <View style={style.App}>
        <ContadorV2/>
        {/*<MinMax max='30' min='3'/>
        <Pai/>
        <Contador inicial={100}/>
        <Botao/>
        <Titulo principal='Produto' secundario='Tela de produtos'/>
        <MinMax max={300} min={39}/>
         <X />
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
       flexGrow: 1,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20
    }
})