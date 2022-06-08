import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import APIService from '../Networking/API';
import TodoListStyles from '../Styles/TodoListStyles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

export default function TodoList() {
  const [listPost, setListPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    APIService.getTodos()
      .then(res => {
        setListPost(res);
      })
      .finally(() => setLoading(false));
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={
          item.completed
            ? TodoListStyles.itemContainer02
            : TodoListStyles.itemContainer
        }>
        <View style={TodoListStyles.itemSubContainer}>
          <View style={TodoListStyles.itemSubContainer01}>
            <Text style={TodoListStyles.itemContent}>
              UserID: {item.userId}
            </Text>
            <Text style={TodoListStyles.itemContent}>ID: {item.id}</Text>
            <Text style={TodoListStyles.itemContent}>Title: {item.title}</Text>
          </View>
          <View style={TodoListStyles.itemImageContainer}>
            <Image
              style={TodoListStyles.itemImage}
              source={
                item.completed
                  ? require('../Images/checked.png')
                  : require('../Images/uncheck.png')
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem02 = ({item}) => {
    return (
      item.completed && (
        <TouchableOpacity
          style={
            item.completed
              ? TodoListStyles.itemContainer02
              : TodoListStyles.itemContainer
          }>
          <View style={TodoListStyles.itemSubContainer}>
            <View style={TodoListStyles.itemSubContainer01}>
              <Text style={TodoListStyles.itemContent}>
                UserID: {item.userId}
              </Text>
              <Text style={TodoListStyles.itemContent}>ID: {item.id}</Text>
              <Text style={TodoListStyles.itemContent}>
                Title: {item.title}
              </Text>
            </View>
            <View style={TodoListStyles.itemImageContainer}>
              <Image
                style={TodoListStyles.itemImage}
                source={
                  item.completed
                    ? require('../Images/checked.png')
                    : require('../Images/uncheck.png')
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  const renderItem03 = ({item}) => {
    return (
      !item.completed && (
        <TouchableOpacity
          style={
            item.completed
              ? TodoListStyles.itemContainer02
              : TodoListStyles.itemContainer
          }>
          <View style={TodoListStyles.itemSubContainer}>
            <View style={TodoListStyles.itemSubContainer01}>
              <Text style={TodoListStyles.itemContent}>
                UserID: {item.userId}
              </Text>
              <Text style={TodoListStyles.itemContent}>ID: {item.id}</Text>
              <Text style={TodoListStyles.itemContent}>
                Title: {item.title}
              </Text>
            </View>
            <View style={TodoListStyles.itemImageContainer}>
              <Image
                style={TodoListStyles.itemImage}
                source={
                  item.completed
                    ? require('../Images/checked.png')
                    : require('../Images/uncheck.png')
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      )
    );
  };

  const FirstRoute = () => (
    <FlatList
      maxToRenderPerBatch={10}
      data={listPost}
      refreshing={loading}
      onRefresh={fetch}
      renderItem={renderItem}
    />
  );

  const SecondRoute = () => (
    <FlatList
      maxToRenderPerBatch={10}
      data={listPost}
      refreshing={loading}
      onRefresh={fetch}
      renderItem={renderItem02}
    />
  );

  const ThirdRoute = () => (
    <FlatList
      maxToRenderPerBatch={10}
      data={listPost}
      refreshing={loading}
      onRefresh={fetch}
      renderItem={renderItem03}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Completed'},
    {key: 'third', title: 'Uncompleted'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: '#2BC837', marginBottom: 10}}
    />
  );

  return (
    <SafeAreaView style={TodoListStyles.container}>
      <Text style={TodoListStyles.title}>Todo List</Text>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
