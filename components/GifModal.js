import React from 'react'
import { Modal, Text, Image, View } from 'react-native';
import { Button } from 'react-native-elements'


class GifModal extends React.Component {
  render() {
    if (!this.props.selectedGif) {
      return <Text></Text>
    }
    
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.modalIsOpen}
          onRequestClose={() => this.props.onRequestClose()} 
        >
          <View style={styles.modalStyle}>
            <Image source={{ uri: this.props.selectedGif.images.original.url}} style={{ width: this.props.dims.width / 1.2, height: this.props.dims.height / 1.5 }}/>
            <Text style={styles.textStyle}>
              <Text style={{ fontWeight: 'bold' }}>Source:</Text> { this.props.selectedGif.source}
              </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Rating:</Text> { this.props.selectedGif.rating }
              </Text>
            <Button 
              title='Close'
              large
              onPress={this.props.onRequestClose}
              backgroundColor='#F51A48'
              raised
            />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  }
}

export default GifModal;