import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import APIService from '../Networking/API';
import UserAlbumsStyles from '../Styles/UserAlbumsStyles';

export default function UserAlbums({navigation, route}) {
  const {id} = route?.params;
  const [listPost, setListPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    APIService.getAlbumsUser(id)
      .then(res => {
        setListPost(res);
      })
      .finally(() => setLoading(false));
  };

  const pressItem = id => {
    navigation.navigate('UserAlbumsDetail', {id: id});
  };

  const renderItem = ({item}) => {
    return (
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
