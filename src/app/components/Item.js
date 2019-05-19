import React from 'react'
import { Text, TouchableOpacity, Animated, Easing } from 'react-native'
import { deckList } from '../styles/DeckList'

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
    let scaleValue = new Animated.Value(1)

    return (
      <Animated.View
        style={{
          ...deckList.item,
          transform: [{ scale: scaleValue }]
        }}
      >
        <TouchableOpacity
          onPressIn={() => {
            this.startPressAnimation(scaleValue)
          }}
          onPressOut={() => {
            this.resetAnimation(scaleValue)
            navigation.navigate('Deck', {
              deck: item,
              title: item.title
            })
          }}
        >
          <Text style={deckList.text}>{item.title}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

export default Item
