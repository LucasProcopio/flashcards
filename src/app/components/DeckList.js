import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData, handleFetchDeck } from '../redux/actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from '../styles/colors'

class DeckList extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
    dispatch(handleFetchDeck())
  }

  render() {
    const { decks } = this.props
    console.log(decks)
    return (
      <View>
        {/*
          TODO: style button to be on top of the content
          TODO: Add animation on click
          TODO: Style the deck view
        */}
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('NewDeck')
            }}
          >
            <MaterialCommunityIcons
              name="plus-circle"
              size={70}
              color={color.main}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={decks}
          extraData={decks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Deck', {
                      deck: item,
                      title: item.title
                    })
                  }}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  decks: Object.values(state.decks)
})

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: 'blue',
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: 'white'
  }
})

export default connect(mapStateToProps)(DeckList)
