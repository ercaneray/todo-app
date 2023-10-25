import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import music_data from './data/music-data.json'
import MusicCard from './components/MusicCard'

export default function App() {

  const renderSong = ({ item }) =>
  <MusicCard
    imageUrl={item.imageUrl}
    title={item.title}
    artist={item.artist}
    year={item.year}
    isSoldOut={item.isSoldOut}
  />
  const renderSeparator = () => <View style={styles.separator} />

  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
})
//d