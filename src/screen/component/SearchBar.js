import React from 'react';
import {View, TextInput} from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 5,
          marginVertical: 5,
          borderRadius: 100,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={this.props.searchValue}
          onChangeText={text => this.props.searchFunction(text)}
          placeholder="Search"
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
          }}
        />
      </View>
    );
  }
}
