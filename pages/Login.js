import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Input, Item, Button, Label, Form} from 'native-base';
import * as firebase from 'firebase';
import { BorderlessButton } from 'react-native-gesture-handler';

class Login extends React.Component {
  state= [
    {
      email: '',
      password: ''
    }
  ]

  componentDidMount(){
    firebase.auth()
            .onAuthStateChanged((user)=> {
                if(user !== null){
            console.log(user);
            }
    })
  }

  signupUser = (email,password) => {
    try{
      if(this.state.password.length<8){
          alert("please enter at Least 8 characters");
          return;
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(email,password);
    }
    catch(error){
        console.log(error.toString());
        
    }
  }

  loginUser = (email,password) => {
      try {
        firebase
        .auth().signInWithEmailAndPassword(email,password)
        .then((user)=>{
            console.log(user);
            this.props.navigation.navigate('Todo');
        })
      }
      catch(error){
        console.log(error.toString());
      }
      
}

async loginWithFacebook (){

    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
    ('435742190661963',{permissions: ['public_profile']});
    
    if (type == 'success'){

        const credential= firebase.auth.FacebookAuthProvider.credential(token);
        
        firebase.auth()
                .signInWithCredential(credential)
                .catch((error)=>{
                      console.log(error);
        })
    }  
}

static navigationOptions = {
  title: "Task Arranger",
  headerTitleStyle: { 
      textAlign:"center", 
      fontSize: 24,
      fontWeight: "bold",
      flex:1 
  },
}

  render(){
    return (
      <Container style={styles.container}>
        <Form>
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

          <Button
              full 
              rounded
              style={styles.facebook}
              onPress={()=> this.loginWithFacebook()}
              >
            <Text style={styles.buttonTxt}> Login With Facebook </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft:15,
    marginRight: 10, 
    marginTop: 50
  },
  item: {
    marginTop: 5,
    marginBottom:20,
    paddingBottom:10,
    flexDirection: "column",
    alignItems: "stretch"
  },
  label:{
    marginBottom:10,
  },
  input: {
   fontSize: 16,
   alignItems: "stretch"
  },
  login:{ 
    marginTop: 10,
    marginBottom:10
  },
  signup:{
   backgroundColor :'#3f90b5'
  },
  facebook:{
    marginTop: 10,  
  },
  buttonTxt: {
    color: "#fff",
    fontSize:20,
    fontWeight: 'bold',
  }
});

export default Login;