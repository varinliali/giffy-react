import React from "react";
import { View, Text, TextInput } from "react-native";
import { Icon } from "react-native-elements"

const SearchBar = ({ onTermChange, dims, logoutUser }) => (
  <View style={[styles.container, { width: dims.width / 1.4 }]}>
    <TextInput
      style={styles.textInputStyle}
      placeholder="Enter text to search for gifs!"
      onChangeText={text => onTermChange(text)}
    />
    <Icon
      color='blue'
      name="content-cut"
      onPress={() => logoutUser()}
    />
  </View>
);

const styles = {
  container: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(215, 219, 226, 0.52)",
    backgroundColor: "white",
    alignItems: 'center'
  },
  textInputStyle: {
    height: "100%",
    color: "blue",
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  }
};

export default SearchBar;
