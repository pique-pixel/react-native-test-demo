import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, FlatList} from 'react-native';

import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isGray: false,
    };
  }
  componentDidMount(e) {
    Axios.get('https://picsum.photos/v2/list')
      .then(response => {
        this.setState({
          images: response.data,
        });
      })
      .catch();
  }

  //set the data into the flat list

  renderItem = ({item}) => {
    console.log(this.state.isGray);

    //   let url=`https://i.picsum.photos/id`+`{item.id}`+'/200'
    let url = '';
    if (this.state.isGray) {
      url = item.download_url + '?grayscale';
    } else {
      url = item.download_url;
    }

    return (
      <View style={{margin: 5, padding: 5}}>
        <Image source={{uri: url}} style={{width: 200, height: 200}} />
        <Text>by {
        item.author}</Text>
        <Button title="Share" onPress={() => {
            
        }} />
      </View>
    );
  };

  render() {
    return (
      <View>
        <Button
          title="GrayColor"
          onPress={() => {
            this.setState({
              isGray: true,
            });
            console.log(this.state.isGray);
          }}
        />
        <Button
          title="Color"
          onPress={() => {
            this.setState({
              isGray: false,
            });
            console.log(this.state.isGray);
          }}
        />
        <FlatList
          data={this.state.images}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  shareButton: {
    width: 100,
    backgroundColor: 'tomato',
  },
});

export default Home;
