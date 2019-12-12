import React from 'react';
import { StyleSheet, Text, StatusBar, FlatList, View} from 'react-native';
import { Container,Content,Header, Input, Item, Button, Icon, List,Body,ListItem,CheckBox} from 'native-base';

import * as firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
// import { ListItem, CheckBox } from "react-native-elements";

// var Tasks =[
//     {title:"Task1", status: true} , 
//     {title:"Task2", status: false} , 
//     {title:"Task3", status: true} , 
//     {title:"Task4", status: false}];

var Tasks = [];

class Todo extends React.Component {

    state= {
        data: Tasks,
        newTask: ""
    }
    
    componentDidMount(){
        firebase.database().ref('/tasks').on('child_added', (task)=> {
           var newData = [...this.state.data];
           newData.push(task);
           this.setState({data : newData , newTask: ""});
        })
        
    }

    componentDidUpdate(){
        firebase.database().ref('/tasks')

    }

    addTask(task) {
      var key = firebase.database().ref('/tasks').push().key;
      firebase.database().ref('/tasks').child(key).set({title : task, status: false});
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
      };
    

  async  deleteTask(task){
    await firebase.database().ref('/tasks/'+task.key).set(null);
    var newData = [...this.state.data].filter(_task => _task.key !== task.key);
    this.setState({data : newData});
    alert('deleted successfully !');
    }
    
  render(){
    return (
      <Container>
            
          <Header style={styles.header}>
              <View>
                  <Item>
                      <TextInput
                      placeholder="Add Task Name"
                      placeholderTextColor="#d0d1d9"
                      onChangeText={(newTask)=> this.setState({newTask})}
                      value={ this.state.newTask}
                      style={styles.inputBox}
                      />

                      <Button style={styles.buttonBox} 
                                onPress={()=> this.addTask(this.state.newTask)}>
                          <Icon name="add" style={styles.icon}></Icon>
                      </Button>          
                  </Item>
              </View>
          </Header>

            <List enableEmptySections>
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
                                    <Text style={styles.listTitle}>{item.val().title}</Text>

                                    <Button style={styles.listButton}
                                                onPress={()=> this.deleteTask(item)}>
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
        backgroundColor:"#fff",
        marginTop: 25
    },
    inputBox:{
        justifyContent: "flex-start",
        color: "#000"
    },
    buttonBox:{
        justifyContent: "flex-end",
        backgroundColor:"#3f90b5"
    },
    icon:{
        backgroundColor:"#3f90b5"
    },
    list: {
        marginTop: 20
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