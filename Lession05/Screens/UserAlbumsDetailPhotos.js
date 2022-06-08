import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import APIService from '../Networking/API';
import DetailPhotosStyles from '../Styles/DetailPhotosStyles';

export default function UserAlbumsDetailPhotos({route}) {
  const {id} = route?.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    APIService.getDetailPhotos(id).then(response => {
      setPost(response);
    });
  }, []);

  return (
    <View style={DetailPhotosStyles.container}>
      <View style={DetailPhotosStyles.itemContainer}>
        <Text style={DetailPhotosStyles.itemContentTitle}>
          Title: {post.title}
        </Text>
        <Text style={DetailPhotosStyles.itemContent}>
          AlbumID: {post.albumId}
        </Text>
        <Text style={DetailPhotosStyles.itemContent}>ID: {post.id}</Text>
        <View style={DetailPhotosStyles.itemImageContainer}>
          <Image
            style={DetailPhotosStyles.itemImage}
            source={{uri: post.thumbnailUrl}}
          />
        </View>
      </View>
    </View>
  );
}
