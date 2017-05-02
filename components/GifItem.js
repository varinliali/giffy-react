import React from "react";
import { Image, Dimensions, View,TouchableWithoutFeedback } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window");

const GifItem = ({ gif, onGifSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onGifSelect(gif)}>
      <Image
        source={{ uri: gif.images.downsized.url }}
        style={styles.imageStyle}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = {
  imageStyle: {
    width: SCREEN_WIDTH.width / 1.1,
    height: 200,
    marginTop: 10
  }
};

export default GifItem;
