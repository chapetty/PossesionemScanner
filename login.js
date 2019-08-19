import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import AddBook from './components/AddBook';

const Login = () => {

  const [addBook, setAddBook] = useState(true);

  return (
    <View style={styles.view}>
      <TextInput placeholder="Username" style={styles.textBoxStyle} textContentType='username' />
      <TextInput placeholder="Password" style={styles.textBoxStyle} textContentType='password' secureTextEntry={true} />
      <Button title="Login" style={styles.button} />
      <Button title="Test" onPress={() => setAddBook(true)} />
      <AddBook visible={addBook} setVisible={setAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1
  },
  textBoxStyle: {
    padding: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'white',
    width: '50%'
  }
});

export default Login;