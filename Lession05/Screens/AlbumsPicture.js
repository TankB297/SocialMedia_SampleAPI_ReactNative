import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import APIService from '../Networking/API';
import HomeStyles from '../Styles/HomeStyles';
import UserAlbumsStyles from '../Styles/UserAlbumsStyles';

export default function AlbumsPicture({navigation}) {
  const [listPost, setListPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    APIService.getAlbums()
      .then(res => {
        setListPost(res);
      })
      .finally(() => setLoading(false));
  };

  const pressItem = id => {
    navigation.navigate('DetailAlbumsPicture', {id: id});
  };

  const renderItem = ({item}) => {
    return (
      // <TouchableOpacity
      //   onPress={() => pressItem(item.id)}
      //   style={HomeStyles.itemContainer}>
      //   <Text style={HomeStyles.itemContent}>UserID: {item.userId}</Text>
      //   <Text style={HomeStyles.itemContent}>ID: {item.id}</Text>
      //   <Text style={HomeStyles.itemContent}>Title: {item.title}</Text>
      // </TouchableOpacity>
      <TouchableOpacity
        onPress={() => pressItem(item.id)}
        style={UserAlbumsStyles.itemContainer}>
        <Image
          style={UserAlbumsStyles.itemImage}
          source={require('../Images/PreviewAlbum.jpg')}
        />
        <View style={UserAlbumsStyles.itemContentContainer}>
          <Text style={UserAlbumsStyles.itemContent}>Title: {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={UserAlbumsStyles.container}>
      <Text style={UserAlbumsStyles.mainAlbumTitle}>Albums</Text>
      <FlatList
        data={listPost}
        refreshing={loading}
        onRefresh={fetch}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
