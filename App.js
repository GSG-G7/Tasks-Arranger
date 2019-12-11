import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBsVDmkwmJSwgfcRWbc8YBpDhBe9fCf5F8",
  authDomain: "tasks-arranger.firebaseapp.com",
  databaseURL: "https://tasks-arranger.firebaseio.com",
  projectId: "tasks-arranger",
  storageBucket: "tasks-arranger.appspot.com",
}

firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default function App() {
  return (
    <Container style={styles.container}>
      <form>
        <Item  style={styles.item}>
          <Label style={styles.label}>Email</Label>
          <Input
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
          ></Input>
        </Item>

        <Item  style={styles. item} >
          <Label style={styles.label}>Password</Label>
          <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
          ></Input>
        </Item>

        <Button
            full 
            rounded
            success
            style={styles.login}
            >
          <Text style={styles.buttonTxt}> Login </Text>
        </Button>

        <Button
            full 
            rounded
            style={styles.signup}
            >
          <Text style={styles.buttonTxt}> Sign Up </Text>
        </Button>
      </form>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft:10,
    marginRight: 10
  },
  item: {
    marginTop: 5,
    marginBottom:20,
    paddingBottom:10
  },
  label:{
    marginBottom:10
  },
  input: {
   fontSize: 16,
  },
  login:{ 
    marginTop: 10,
    marginBottom:10
  },
  signup:{
   backgroundColor :'#3f90b5'
  },
  buttonTxt: {
    color: "#fff",
    fontSize:20,
    fontWeight: 'bold',
  }
});
