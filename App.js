import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {DataApi} from './src/config/axios';
import SearchBar from './src/screen/component/SearchBar';
import styles from './src/screen/styles/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      searchValue: '',
    };
  }
  componentDidMount() {
    this.getUser();
  }
  searchFunction = text => {
    // Alert.alert(JSON.stringify(this.state.users));
    const updatedData = this.state.users.filter(item => {
      const item_data = `${item.login.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({data: updatedData, searchValue: text});
  };
  getUser() {
    DataApi.getUsers()
      .then(res => {
        // Alert.alert('Abc', JSON.stringify(res.data));
        this.setState({users: res.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          searchValue={this.state.searchValue}
          searchFunction={this.searchFunction}></SearchBar>
        <FlatList
          data={this.state.users}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image style={styles.uAvatar} source={{uri: item.avatar_url}} />
              <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.unameText}>{item.login}</Text>
                <Text style={styles.unameText}>{item.url}</Text>
                <Text style={styles.unameText}>{item.html_url}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
