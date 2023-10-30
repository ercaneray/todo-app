import { FlatList, StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import music_data from './data/music-data.json'
import MusicCard from './components/MusicCard'
import SearchBar from './components/SearchBar'

export default function App() {
  const [musicList,setMusiclist] = useState(music_data)

  const renderSong = ({ item }) =>
    <MusicCard
      imageUrl={item.imageUrl}
      title={item.title}
      artist={item.artist}
      year={item.year}
      isSoldOut={item.isSoldOut}
    />

  const renderSeparator = () => <View style={styles.separator} />

  const handleSeach = (text) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      return currentTitle.indexOf(searchedText) > -1
    })

    setMusiclist(filteredList)
  }
  return (
    <View>
      <SearchBar
        onSearch={handleSeach}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={musicList}
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