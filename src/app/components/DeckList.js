import React from 'react'
import Item from './Item'

import { View, FlatList } from 'react-native'
import ActionButton from 'react-native-action-button'

import { connect } from 'react-redux'
import { handleInitialData, handleFetchDeck } from '../redux/actions'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from '../styles/colors'
import { deckList } from '../styles/deckList'

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
      <View style={deckList.container}>
        <View>
          <FlatList
            data={decks}
            extraData={decks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return <Item item={item} navigation={navigation} />
            }}
          />
        </View>
        <ActionButton buttonColor={color.actionColor}>
          <ActionButton.Item
            title="Add new deck"
            onPress={() => {
              navigation.navigate('NewDeck')
            }}
          >
            <MaterialCommunityIcons
              name="library-plus"
              size={30}
              color={color.white}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  decks: Object.values(state.decks)
})

export default connect(mapStateToProps)(DeckList)
