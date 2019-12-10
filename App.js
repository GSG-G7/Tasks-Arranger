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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
