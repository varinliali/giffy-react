import React from 'react';
import { Image, View, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get("window")

const GifsTemp = ({gifs}) => {
  const gifItems = gifs.map(gif => {
    return <Image source={{ uri: gif.url}} style={{ marginTop: 20, width: SCREEN_WIDTH.width, height: SCREEN_WIDTH.height/3.5 }} key={gif.id} />
  })

  return (
    <View>
      {gifItems}
    </View>
  )
}

export default GifsTemp;