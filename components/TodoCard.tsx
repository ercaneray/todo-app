import {Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './TodoCard.style'

const TodoCard = (props) => {
    const [touched, setTouched] = useState(false)
    const changeTouched = () => {
        setTouched(!touched)
    }
    return (
            <TouchableOpacity
                style={touched ? styles.contanier_touched : styles.contanier}
                onPress={changeTouched}
            >
                <Text style={touched ? styles.text_touched : styles.text}>{props.text}</Text>
            </TouchableOpacity>


    )
}

export default TodoCard