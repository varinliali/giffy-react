import Expo from "expo";
import React from "react";
import { Provider } from "react-redux";
// import axios from "axios";

import configureStore from "./store/configureStore";

import App from "./containers/App";

// import GifModal from './components/GifModal';
// import SearchBar from "./components/SearchBar";
// import { StyleSheet, Text, View, Dimensions } from "react-native";

// import GifList from "./components/GifList";

// const SCREEN_WIDTH = Dimensions.get("window");

const store = configureStore();

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Expo.registerRootComponent(Main);

/*class App extends React.Component {
  state = {
    gifs: [],
    selectedGif: null,
    modalIsOpen: false
  };

  openModal = (gif) => {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    })
  }

  handleTermChange = async term => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    try {
      let { data: { data } } = await axios.get(url);
      this.setState({ gifs: data })
    } catch (err) {
      console.log('bisiler olii ' + err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onTermChange={this.handleTermChange} dims={SCREEN_WIDTH} />
        <GifList
          onGifSelect={selectedGif => this.openModal(selectedGif)} 
          gifs={this.state.gifs} 
        />
        <GifModal 
          modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={() => this.closeModal()} 
          dims={SCREEN_WIDTH}  
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(215, 219, 226, 0.12)',
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5
  }
});*/
