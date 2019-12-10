import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<MY_API_KEY>",
  authDomain: "<MY_AUTH_Domain>",
  databaseURL: "<YOUR_DATABASE_URL>",
  storageBucket: "<YOUR_STORAGE_BUCKET>"
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
