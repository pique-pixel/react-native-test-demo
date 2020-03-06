import React, {Component} from 'react';

import {Text, View, Image} from 'react-native';

function ImageDetail({route, navigation}) {
  const {author, url} = route.params;
  // console.log(route)
  return (
    <View style={{padding: 20, margin: 20}}>
      <Image source={{uri: url}} style={{width: 280, height: 300}} />
      <View
        style={{
          marginTop: 15,
          marginBottom: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>by {author}</Text>
      </View>
    </View>
  );
}

export default ImageDetail;
