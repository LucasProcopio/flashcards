import React from 'react'
import { Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { deckList } from '../styles/deckList'

class Item extends React.Component {
  startPressAnimation = scaleValue => {
    scaleValue.setValue(1)
    Animated.timing(scaleValue, {
      toValue: 1.3,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()
  }

  resetAnimation = scaleValue => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()
  }

  render() {
    const { item, navigation } = this.props
    const qtCards = Object.keys(item.questions).length
    let scaleValue = new Animated.Value(1)

    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{ scale: scaleValue }]
        }}
      >
        <TouchableOpacity
          style={deckList.item}
          onPress={() => {
            navigation.navigate('Deck', {
              deck: item,
              title: item.title,
              qtCards: qtCards
            })
          }}
          onPressIn={() => {
            this.startPressAnimation(scaleValue)
          }}
          onPressOut={() => {
            this.resetAnimation(scaleValue)
          }}
        >
          <Text style={deckList.title}>{item.title}</Text>
          <Text style={deckList.cardText}>Cards: {qtCards}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

export default Item
