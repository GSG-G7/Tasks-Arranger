import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';

class Login extends React.Component {
  state= [
    {
      email: '',
      password: ''
    }
  ]
  signupUser = (email,password) => {
    try{
      if(this.state.password.length<8){
          alert("please enter at Least 8 characters");
          return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    catch(error){
        console.log(error.toString());
        
    }
  }

  loginUser = (email,password) => {
      
}

  render(){
    return (
      <Container style={styles.container}>
        <form>
          <Item  style={styles.item}>
            <Label style={styles.label}>Email</Label>
            <Input
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(email)=> this.setState({email})}
            ></Input>
          </Item>
  
          <Item  style={styles. item} >
            <Label style={styles.label}>Password</Label>
            <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={(password)=> this.setState({password})}
            ></Input>
          </Item>
  
          <Button
              full 
              rounded
              success
              style={styles.login}
              onPress={()=>this.loginUser(this.state.email, this.state.password)}
              >
            <Text style={styles.buttonTxt}> Login </Text>
          </Button>
  
          <Button
              full 
              rounded
              style={styles.signup}
              onPress={()=>this.signupUser(this.state.email, this.state.password)}
              >
            <Text style={styles.buttonTxt}> Sign Up </Text>
          </Button>
        </form>
      </Container>
    );
  }
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

export default Login;