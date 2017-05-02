import React from "react";
import { View, Text, TextInput } from "react-native";

const SearchBar = ({ onTermChange, dims }) => (
  <View style={[styles.container, { width: dims.width / 1.1 }]}>
    <TextInput
      style={styles.textInputStyle}
      placeholder="Enter text to search for gifs!"
      onChangeText={text => onTermChange(text)}
    />
  </View>
);

const styles = {
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(215, 219, 226, 0.52)",
    backgroundColor: "white"
  },
  textInputStyle: {
    height: "100%",
    color: "blue",
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
  }
};

export default SearchBar;
