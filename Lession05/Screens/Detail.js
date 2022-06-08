import {View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import APIService from '../Networking/API';
import React, {useEffect, useState} from 'react';
import DetailStyles from '../Styles/DetailStyles';
import HomeStyles from '../Styles/HomeStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detail({route}) {
  const {id} = route?.params;
  const [post, setPost] = useState({});
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    APIService.getPostComments(id).then(response => {
      setComments(response);
    });
    APIService.getPostDetail(id).then(response => {
      setPost(response);
    });
    APIService.getUsers().then(response => {
      setUser(response);
    });
  }, []);

  const handleLikeAction = () => {
    setIsLiked(!isLiked);
  };

  return (
    <ScrollView style={DetailStyles.container}>
      <View style={DetailStyles.itemContainer}>
        <View style={HomeStyles.itemSubContainer}>
          <Image
            style={HomeStyles.itemAvatar}
            source={require('../Images/avatarDefault.png')}
          />
          <Text style={HomeStyles.itemContent02}>
            {user[post.userId - 1]?.name}
          </Text>
        </View>
        <View>
          <Image
            style={DetailStyles.itemPostImage}
            source={require('../Images/PostImage.jpg')}
          />
        </View>
        <View style={HomeStyles.itemIconContainer}>
          <TouchableOpacity onPress={() => handleLikeAction()}>
            {!isLiked ? (
              <Ionicons name={'heart-outline'} size={30} />
            ) : (
              <Ionicons name={'heart'} size={30} color={'#2BC837'} />
            )}
          </TouchableOpacity>
          <Ionicons name={'chatbubble-outline'} size={28} />
          <Ionicons name={'share-social-outline'} size={28} />
        </View>
        <Text style={HomeStyles.itemContent02}>22.2K likes</Text>
        <Text style={HomeStyles.itemContent}>
          {post.title} {post.body}
        </Text>
        {comments.map(item => (
          <View key={item.id} style={DetailStyles.itemComment}>
            <View style={DetailStyles.avatarContainer}>
              <Image
                style={DetailStyles.avatarComment}
                source={require('../Images/avatarDefault.png')}
              />
              <Text style={DetailStyles.itemContent02}>{item.name}</Text>
            </View>
            <View style={DetailStyles.itemContentContainer}>
              <View style={DetailStyles.itemContentSubContainer}>
                <Text style={DetailStyles.itemContent}>{item.body}</Text>
              </View>
              <Ionicons
                style={DetailStyles.itemCommentReaction}
                name={'heart-outline'}
                size={20}
              />
            </View>
            <View style={DetailStyles.itemReply}>
              <Text style={DetailStyles.itemContent03}>1 hour</Text>
              <Text style={DetailStyles.itemContent03}>Reply</Text>
              <Text style={DetailStyles.itemContent03}>Direct</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
