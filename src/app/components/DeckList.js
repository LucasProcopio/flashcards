import React from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData, handleFetchDeck } from '../redux/actions'

class DeckList extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
    dispatch(handleFetchDeck())
  }

  render () {
    const { decks } = this.props
    return (
      <View>
        <FlatList
          data={decks}
          extraData={decks}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.title}</Text>
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
