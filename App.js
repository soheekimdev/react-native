import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  const name = "Maru";
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          padding: 5
        }}
        placeholder="Name me!"
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  )
}

export default Cafe;
