import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import APIService from '../Networking/API';
import DetailUserStyles from '../Styles/DetailUserStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailUser({navigation, route}) {
  const {id} = route?.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    APIService.getDetailUser(id).then(response => {
      setPost(response);
    });
  }, []);

  const todoList = () => {
    navigation.navigate('UserTodos', {id: id});
  };

  const albums = () => {
    navigation.navigate('UserAlbums', {id: id});
  };

  return (
    <ScrollView style={DetailUserStyles.container}>
      <View style={DetailUserStyles.avatarContainer}>
        <Image
          style={DetailUserStyles.avatar}
          source={require('../Images/avatar.png')}
        />
        <Text style={DetailUserStyles.subContent03}>{post.name}</Text>
        <Text style={DetailUserStyles.subContent02}>{post.username}</Text>
      </View>
      <View style={DetailUserStyles.contentContainer}>
        <View style={DetailUserStyles.contentSubContainer01}>
          <View style={DetailUserStyles.contentSubContainer02}>
            <View style={DetailUserStyles.content01}>
              <Ionicons name={'mail'} size={25} color={'#2BC837'} />
            </View>
            <View style={DetailUserStyles.content02}>
              <Text style={DetailUserStyles.subContent02}>{post.email}</Text>
            </View>
          </View>
          <View style={DetailUserStyles.contentSubContainer02}>
            <View style={DetailUserStyles.content01}>
              <Ionicons name={'call'} size={25} color={'#2BC837'} />
            </View>
            <View style={DetailUserStyles.content02}>
              <Text style={DetailUserStyles.subContent02}>{post.phone}</Text>
            </View>
          </View>
          <View style={DetailUserStyles.contentSubContainer02}>
            <View style={DetailUserStyles.content01}>
              <Ionicons name={'globe'} size={25} color={'#2BC837'} />
            </View>
            <View style={DetailUserStyles.content02}>
              <Text style={DetailUserStyles.subContent02}>{post.website}</Text>
            </View>
          </View>
          <View style={DetailUserStyles.contentSubContainer02}>
            <View style={DetailUserStyles.content01}>
              <Ionicons name={'location'} size={25} color={'#2BC837'} />
            </View>
            <View style={DetailUserStyles.content02}>
              <Text style={DetailUserStyles.subContent02}>
                {post?.address?.city}
              </Text>
            </View>
          </View>
          <View style={DetailUserStyles.contentSubContainer02}>
            <View style={DetailUserStyles.content01}>
              <Ionicons name={'compass'} size={25} color={'#2BC837'} />
            </View>
            <View style={DetailUserStyles.content02}>
              <Text style={DetailUserStyles.subContent02}>
                {post?.company?.name}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={DetailUserStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => albums()}
          style={DetailUserStyles.button01}>
          <Text style={DetailUserStyles.button01Content}>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => todoList()}
          style={DetailUserStyles.button01}>
          <Text style={DetailUserStyles.button01Content}>Todos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
