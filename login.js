import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Login = () => {
  return (
    <View>
        <TextInput placeholder="Username" style={{margin: 10, borderColor: 'black', borderWidth: 1, padding: 5}} />
        <TextInput placeholder="Password" style={{margin: 10, borderColor: 'black', borderWidth: 1, padding: 5}} textContentType='password' />
        <Button title="Login" style={{margin:10}} />
    </View>
  );
};

export default Login;