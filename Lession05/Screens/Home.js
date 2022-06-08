import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import APIService from '../Networking/API';
import HomeStyles from '../Styles/HomeStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LikeAction({id}) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeAction = id => {
    if (id !== null) {
      setIsLiked(!isLiked);
    }
  };
  return (
    <TouchableOpacity onPress={() => handleLikeAction(id)}>
      {!isLiked ? (
        <Ionicons name={'heart-outline'} size={30} />
      ) : (
        <Ionicons name={'heart'} size={30} color={'#2BC837'} />
      )}
    </TouchableOpacity>
  );
}

export default function Home({navigation}) {
  const [listPost, setListPost] = useState([]);
  const listPostRef = useRef([]);

  const [user, setUser] = useState([]);
  const userRef = useRef([]);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch();
    fetchUser();
  }, []);

  const fetch = () => {
    setLoading(true);
    APIService.getPosts()
      .then(res => {
        setListPost(res);
        listPostRef.current = res;
      })
      .finally(() => setLoading(false));
  };

  const fetchUser = () => {
    setLoading(true);
    APIService.getUsers()
      .then(res => {
        setUser(res);
        userRef.current = res;
      })
      .finally(() => setLoading(false));
  };

  const pressItem = id => {
    navigation.navigate('Detail', {id: id});
  };

  const renderItem = ({item}) => {
    return (
      <View style={HomeStyles.itemContainer}>
        <View style={HomeStyles.itemSubContainer}>
          <Image
            style={HomeStyles.itemAvatar}
            source={require('../Images/avatarDefault.png')}
          />
          <Text style={HomeStyles.itemContent02}>
            {user[item.userId - 1]?.name}
          </Text>
        </View>
        <View>
          <Image
            style={HomeStyles.itemPostImage}
            source={require('../Images/PostImage.jpg')}
          />
        </View>
        <View style={HomeStyles.itemIconContainer}>
          <LikeAction id={item.id} />
          <TouchableOpacity onPress={() => pressItem(item.id)}>
            <Ionicons name={'chatbubble-outline'} size={28} />
          </TouchableOpacity>
          <Ionicons name={'share-social-outline'} size={28} />
        </View>
        <Text style={HomeStyles.itemContent02}>22.2K likes</Text>
        <Text style={HomeStyles.itemContent}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.headerContainer}>
        <Text style={HomeStyles.title}>Post List</Text>
        <TextInput placeholder="Search anypost..." onChangeText={
          txt => {
            setSearch(txt);
            if(txt === ''){
              setListPost(listPostRef.current);
              setUser(userRef.current);
            }
            else{
              const searchPost = listPost.filter(item => item.title.includes(search.toLowerCase()));
              setListPost(searchPost);
            }
          }
        }/>
      </View>
      <FlatList
        data={listPost}
        refreshing={loading}
        onRefresh={fetch}
        renderItem={renderItem}
        maxToRenderPerBatch={5}
      />
    </View>
  );
}
