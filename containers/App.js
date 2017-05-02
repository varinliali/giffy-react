import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { View, Dimensions, StyleSheet } from 'react-native';

import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import GifList from '../components/GifList';
// import GifsTemp from '../components/GifsTemp';

const dims = Dimensions.get('window')

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar 
          onTermChange={this.props.requestGifs} 
          dims={dims} 
        />
        <GifList 
          gifs={this.props.gifs} 
          onGifSelect={ selectedGif => this.props.openModal({selectedGif})}
        />
        <GifModal 
          modalIsOpen={this.props.modalIsOpen}
          selectedGif={this.props.selectedGif}
          onRequestClose={() => this.props.closeModal()}
          dims={dims}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'rgba(215, 219, 226, 0.12)',
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5
  }
});

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  }
}

export default connect(mapStateToProps, actions)(App)