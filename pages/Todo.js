import React from 'react';
import { StyleSheet, Text, StatusBar, FlatList} from 'react-native';
import { Container,Content,Header, Input, Item, Button, Icon, List} from 'native-base';

import { ListItem } from "react-native-elements";

var Tasks =["Task1" , "Task2"];

class Todo extends React.Component {

    state= {
        data: Tasks,
        newContact: ""
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
                      style={styles.inputBox}/>
                      <Button style={styles.buttonBox}>
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
                        <ListItem
                          title={item}
                        />
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
    }
});

export default Todo;