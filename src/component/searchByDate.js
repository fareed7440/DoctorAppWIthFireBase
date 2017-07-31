import React, { Component } from 'react';
import axios from 'axios'
import {
    AsyncStorage, Text,
    ScrollView
} from 'react-native'
import { Container, Content, Card, Header, Item, Input, Button, CardItem, Icon, Right, ListItem, List, Body } from 'native-base';

var arr2 = [];

class SearchByDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.helperSearch = this.helperSearch.bind(this)
       
    }


    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    helperSearch(e) {
        e.preventDefault();
        let date = this.state.date;
        let obj = date;
        console.log('namee', obj)
        this.props.searchdate(obj)

    }
    

    render() {
        arr2 = [];
        const date = this.props && this.props.SearchDate && this.props.SearchDate.date ? this.props.SearchDate.date : [];
        console.log('search', date)
        const helper1 = date[0];
        for (var key in helper1) {
            arr2.push(helper1[key])
            console.log('arr2', arr2)

        }
        

        return (
            <Container>
                <Content>

                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" 
                            
                            
                            />
                            <Input placeholder="Search"
                               keyboardType='numeric'
                                name='date'
                                ref='date'
                                value={this.state.value}
                                onChangeText={(date) => this.setState({ date })}
                            />


                            <Icon name="ios-people"
                                onPress={
                                    this.helperSearch
                                }
                            />
                        </Item>
                   
                    </Header>









                    {


                        arr2.map((item, i) => {
                            return (
                                <ScrollView>
                                    <Card style={{ flex: 1 }}>
                                        <CardItem >
                                            <List key={i}>
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

export default SearchByDate;





