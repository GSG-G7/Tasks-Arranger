import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';

import AppContainer from './pages/Navigator';
// import Todo from './pages/Todo';

const firebaseConfig = {
  apiKey: "AIzaSyBsVDmkwmJSwgfcRWbc8YBpDhBe9fCf5F8",
  authDomain: "tasks-arranger.firebaseapp.com",
  databaseURL: "https://tasks-arranger.firebaseio.com",
  projectId: "tasks-arranger",
  storageBucket: "tasks-arranger.appspot.com",
}

firebase.initializeApp(firebaseConfig);


const App = () => { 
  return(
    <View style={styles.conatiner}>
      <AppContainer />    
      {/* <Todo /> */}
    </View>
    )
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
  }
})

export default App ;
