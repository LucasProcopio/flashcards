import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData, handleFetchDeck } from '../redux/actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from '../styles/colors'
import Item from './Item'

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
    const { decks, navigation } = this.props

    return (
      <View>
        {/*
          TODO: style button to be on top of the content
          TODO: Style the deck view
        */}
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewDeck')
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
            return <Item item={item} navigation={navigation} />
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  decks: Object.values(state.decks)
})

export default connect(mapStateToProps)(DeckList)
