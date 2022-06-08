import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import APIService from '../Networking/API';
import UsersStyles from '../Styles/UsersStyles';

export default function Home({navigation}) {
  const [listPost, setListPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    APIService.getUsers()
      .then(res => {
        setListPost(res);
      })
      .finally(() => setLoading(false));
  };

  const pressItem = id => {
    navigation.navigate('DetailUser', {id: id});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => pressItem(item.id)}
        style={UsersStyles.itemContainer}>
        <View style={UsersStyles.itemImageContainer}>
          <Image style={UsersStyles.itemImage} source={require('../Images/avatarDefault.png')} />
        </View>
        <View style={UsersStyles.itemContentContainer}>
          <Text style={UsersStyles.itemContent02}>{item.username}</Text>
          <Text style={UsersStyles.itemContent}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={UsersStyles.container}>
      <Text style={UsersStyles.title}>User List</Text>
      <FlatList
        data={listPost}
        refreshing={loading}
        onRefresh={fetch}
        renderItem={renderItem}
      />
    </View>
  );
}
