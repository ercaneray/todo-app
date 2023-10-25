import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './MusicCard.styles'

export default function MusicCard(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: props.imageUrl }}
            />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{props.artist}</Text>
                        <Text style={styles.year}>{props.year}</Text>
                    </View>
                    {props.isSoldOut && (<View style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>Sold Out</Text>
                    </View>)}
                </View>
            </View>
        </View>
    )
}