import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Login = () => {
  return (
    <View>
        <TextInput placeholder="Username" style={textBoxStyle} />
        <TextInput placeholder="Password" style={textBoxStyle} />
        <Button title="Login" />
    </View>
  );
};

const textBoxStyle = {
  margin: 10,
  padding: 5,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 3
};

export default Login;