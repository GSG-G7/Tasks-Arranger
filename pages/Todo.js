import React from 'react';
import { StyleSheet, Text, StatusBar, FlatList} from 'react-native';
import { Container,Content,Header, Input, Item, Button, Icon, List,Body,ListItem,CheckBox} from 'native-base';

import * as firebase from 'firebase';
// import { ListItem, CheckBox } from "react-native-elements";

var Tasks =[
    {title:"Task1", status: true} , 
    {title:"Task2", status: false} , 
    {title:"Task3", status: true} , 
    {title:"Task4", status: false}];

class Todo extends React.Component {

    state= {
        data: Tasks,
        newTask: ""
    }

    addTask(data) {
      var key = firebase.database().ref('/tasks').push().key;
      firebase.database().ref('/tasks').child(key).set({title : data, status: false});
    }

    deleteTask(){

    }
    
  render(){
    return (
      <Container>
            
          <Header style={styles.header}>
              <Content>
                  <Item>
                      <Input
                      placeholder="Add Task Name"
                      placeholderTextColor="#fff"
                      onChangeText={(newTask)=> this.setState({newTask})}
                      style={styles.inputBox}
                      />

                      <Button style={styles.buttonBox} 
                                onPress={()=> this.addTask(this.state.newTask)}>
                          <Icon name="add" style={styles.icon}></Icon>
                      </Button>          
                  </Item>
              </Content>
          </Header>

            <List>
                <FlatList
                    style={styles.list}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem>
                              <CheckBox
                                    checked={ item.status }
                                    onPress={ () => this.onCheckBoxPress(item.status) }
                                    />
                                <Body style={styles.listBody}>
                                    <Text style={styles.listTitle}>{item.title}</Text>

                                    <Button style={styles.listButton}
                                                onPress={()=> this.deleteTask()}>
                                        <Icon name="trash" style={styles.listIcon} />
                                    </Button>
                                </Body>
                        </ListItem>
                      )}
                />
              </List>


      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        marginTop:StatusBar.currentHeight,
        backgroundColor:"#3f90b5"
    },
    inputBox:{
        justifyContent: "flex-start",
        color: "#fff"
    },
    buttonBox:{
        justifyContent: "flex-end",
        backgroundColor:"#3f90b5"
    },
    icon:{
        backgroundColor:"#3f90b5"
    },
    list: {
        marginTop: 50
    },
    listBody:{
        flex:1,
        flexDirection: "row",
        justifyContent:'space-between',
        marginStart: 10,
    },
    listTitle: {
        marginTop: 10,
    },
    listIcon:{
        color: "#bc0909",
        alignItems: "center"
    },
    listButton:{
        backgroundColor: "none",
        height: 30,
        width: 30,
    }
});

export default Todo;