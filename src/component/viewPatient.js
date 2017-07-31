import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    AsyncStorage, Text,
    ScrollView 
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right,Left, ListItem,Title, List, Body,Footer,FooterTab } from 'native-base';



var arr = []
class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

    }



    componentWillMount() {
        this.props.patient();
        console.log("componenttt", this.props.patient)
    }

    render() {
        arr = [];
        const data = this.props && this.props.view && this.props.view.viewPatient ? this.props.view.viewPatient : [];
        const helper = data[0];
        for (var key in helper) {
            console.log(helper[key])

            arr.push(helper[key])
            console.log(arr, 'arrr')
        }
        

        return (
            <Container>
                <Content>

                    <Header>
   <Left>

      < Icon style = {{marginLeft:10}}  name='ios-people' 
         onPress={() => Actions.searchByDateCon()}
      
        />
                     <Text>Search By date</Text>
   
  </ Left>
          <Body>
            <Title style={{marginLeft:15}}>Patient Detail</Title>
          </Body>
          <Right >
 <Icon style = {{marginTop : -10}}  name="ios-people"
            onPress={() => Actions.search()} />
                  <Text> Search By name</Text>                            
                     </Right>    

           
                   
                    </Header>
                  




                    {


                        arr.map((item, i) => {
                            return (
                                <ScrollView>
                                    <Card key={i} style={{ flex: 1 }}>
                                        <CardItem >
                                            <List >
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }} >Name:</Text><Text>{item.name}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Gender:</Text><Text>{item.gender}</Text>

                                                </ListItem>


                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Date:</Text><Text>{item.date}</Text>
                                                </ListItem>

                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Disease:</Text><Text>{item.disease}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Medison:</Text><Text>{item.medison}</Text>

                                                </ListItem>
                                                <ListItem>
                                                    <Text style={{ color: '#88FF00' }}>Cost:</Text><Text>{item.cost}</Text>

                                                </ListItem>

                                            </List>
                                        </CardItem>
                                    </Card>

                                </ScrollView>

                            )
                        })
                    }


                </Content>
            </Container>
        )
    }
}

export default ViewPatient;





