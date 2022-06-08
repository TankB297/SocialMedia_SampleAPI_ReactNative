import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import APIService from '../Networking/API';
import React, {useEffect, useState} from 'react';
import DetailAlbumsStyles from '../Styles/DetailAlbumsStyles';

export default function UserAlbumsDetail({navigation, route}) {
  const {id} = route?.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    APIService.getAlbumsDetail(id).then(response => {
      setPost(response);
    });
  }, []);

  const detailPhotos = (id) => {
    navigation.navigate('UserAlbumsDetailPhotos', {id: id});
  }

  return (
    <View style={DetailAlbumsStyles.container}>
      <View style={DetailAlbumsStyles.itemContainer}>
        <FlatList
          data={post}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => detailPhotos(item.id)}>
              <View>
                <Image
                  style={DetailAlbumsStyles.itemImage}
                  source={{uri: item.thumbnailUrl}}
                />
              </View>
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
}
