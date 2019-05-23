import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import CardFlip from 'react-native-card-flip'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam('deck')
    return {
      // TODO add card counter here
      title: deck.title
    }
  }

  render() {
    const { navigation } = this.props
    const deck = navigation.getParam('deck')
    const questions = Object.values(deck.questions).map(val => val.question)

    console.log(questions)
    return (
      // todo: show list of cards , with flip and swipe btn
      // todo: set btn check for answers
      // todo: show percentage of how many are correct at the end
      <View>
        <View>
          <Text>cards 1/10</Text>
        </View>
        <CardStack
          style={styles.content}
          ref={swiper => {
            this.swiper = swiper
          }}
        >
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.text}>A</Text>
          </Card>
          <Card style={[styles.card, styles.card2]}>
            <Text style={styles.text}>B</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.text}>C</Text>
          </Card>
        </CardStack>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  }
})

export default connect()(Quiz)
