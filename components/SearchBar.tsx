import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './SearchBar.styles'

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Search...'
        onChangeText={props.onSearch}
      />
    </View>
  )
}