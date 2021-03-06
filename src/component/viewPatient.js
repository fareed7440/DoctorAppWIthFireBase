import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as DB from '../firebase/firebase'
import {
    AsyncStorage, Text,
    ScrollView 
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, FooterTab, Button, CardItem, Icon, Right,Left, ListItem,Title, List, Body,Footer } from 'native-base';



var arr = []
class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.deleteObject = this.deleteObject.bind(this);

    }

deleteObject(name){
     var that = this;
        var getData
        var deletedObject
        var starCountRef = DB.database.ref('/patientRecords/patient/').orderByChild('name').equalTo(name).once('value', function (snapshot) {
            console.log("deleted VAlue", snapshot.val());
            getData = snapshot.val()
            for (let [key, value] of Object.entries(getData)) {
                console.log("got Object", key, value);
                deletedObject = key
                console.log("deletedObject", deletedObject);
            }


        });

        this.props.removeItems(deletedObject);
        this.props.patient();
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
            console.log('55555',[key])

            arr.push(helper[key])
            console.log(arr, 'arrr')
        }
        

        return (
            <Container>
                <Content>
                     <Footer>
                    <FooterTab>
                          < Icon style = {{marginTop:15 ,  color : '#FFFFFF' ,marginLeft : 4}}  name='ios-arrow-back' 
         onPress={() => Actions.home()}
      
        />
                        <Button>
                             < Icon style = {{}}  name='search' 
         onPress={() => Actions.searchByDateCon()}
      
        />
     <Text > By date</Text>
   
                        </Button>

<Text style ={{marginTop : 16 , fontSize : 17}}>View Patient Detail</Text>


                        <Button>
                            <Icon style = {{}}   name="search"
            onPress={() => Actions.search()} />
                  <Text  style = {{}}> By name</Text> 
                        </Button>
                    </FooterTab>
                </Footer>
  
               {

                        arr.map((item, i) => {
                            
                            return (
                               

                              
                                    <Card key={i+1} style={{ flex: 1 , marginLeft : 5 , marginRight : 5 , marginTop : 5 }}>
                                        <CardItem >
                                            <List   >
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
                                                < Icon onPress={() => this.deleteObject(item.name)}  style = {{ marginLeft : 280}}  name='trash' />

                                            </List>
                                        </CardItem>
                                    </Card>
                                    
 
                               

                            )
                           
                        })
                    }


                </Content>
            </Container>
        )
    }
}

export default ViewPatient;





