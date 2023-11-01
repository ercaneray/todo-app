import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TodoCard from './components/TodoCard'
import { useState } from 'react'

const App = () => {
  const toItem = (item) => {
    setCurrentText(item)
  }
  const addItem = () => {
    setTodoData([...todoData, currentText])
  }
  const [todoData, setTodoData] = useState([])
  const [currentText, setCurrentText] = useState ('')
  let counter = todoData.length
  return (
    <SafeAreaView style={styles.contanier}>
      <View style={styles.todo_contanier}>
        <Text style={styles.todo_text}>Todo App</Text>
        <Text style={styles.todo_counter}>{counter}</Text>
      </View>

      <View>
        <FlatList
          data={todoData}
          renderItem={({ item }) => (
            <TodoCard
              text={item}
            />
          )}
        />
      </View>
      <View style={styles.addTodoBar}>
        <TextInput
          style={styles.textInput}
          placeholder='Add items...'
          placeholderTextColor='#818181'
          onChangeText={(item) => toItem(item)}

        />
        <View style={styles.separator} />
        <TouchableOpacity
          style={currentText ? styles.button : styles.button_deactive}
          onPress={addItem}
        >
          <Text style={styles.button_text}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#102027',
    flex: 1,
  },
  todo_contanier:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todo_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA500',
    margin: 6,
  },
  todo_counter: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA500',
    margin: 6,
  },
  addTodoBar: {
    backgroundColor: '#37474F',
    borderRadius: 10,
    margin: 10,
  },
  textInput: {
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFA500',
    margin: 5,
    marginBottom: 15,
    height: 40,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  button_deactive: {
    backgroundColor: '#808080',
    margin: 5,
    marginBottom: 15,
    height: 40,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  button_text: {
    color: 'white'
  },
  separator: {
    borderWidth: 1,
    borderColor: '#6F8691',
    marginBottom: 5,
    marginHorizontal: 10,
  },
})
export default App