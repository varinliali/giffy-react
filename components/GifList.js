import React from "react";
import { ScrollView, View } from "react-native";

import GifItem from "./GifItem";

const GifList = ({ gifs, onGifSelect }) => {
  const gifItems = gifs.map(image => {
    return (
      <View 
        key={image.id} 
        style={styles.listStyle} 
      >
        <GifItem  onGifSelect={onGifSelect} gif={image} />
      </View>
    )
  });

  return (
    <ScrollView>
      {gifItems}
    </ScrollView>
  );
};

const styles = {
  listStyle: {
    borderColor: 'white',
  }
}

export default GifList;
