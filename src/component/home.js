import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, CardItemFooter, CardItem } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Home extends Component {


    render() {
        return (
            <Container style = {{backgroundColor:'#FFFFFF'}}>
                <Header >
                    <Left>
                        <Button transparent>
                            <TouchableOpacity >
                           
                            </TouchableOpacity >
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ marginLeft: 46 }}>Doctor App</Title>
                    </Body>
                    <Right >
                        <TouchableOpacity >

                        </TouchableOpacity >

                    </Right>
                </Header>



                <CardItem cardBody>
                      <Image source={require('../images/aa.png')} style={{ flex: 1, marginLeft : 10 , marginRight : 10 , marginTop : 100 }} />
                        {/* <Image source={{ uri: 'https://thumbs.dreamstime.com/z/welcome-sign-showing-hello-greeting-hospitality-29397629.jpg' }} style={{ height: 457, width: null, flex: 1 }} /> */}
                  
                </CardItem>
                {/*<TouchableOpacity >
                    <Button full   onPress={()=>Actions.addPatient()}>
                        <Text>Add patient</Text>
                    </Button>
                </TouchableOpacity>*/}
                <Footer style  = {{marginTop: 60}}>
                    <FooterTab>
                        <Button>
                            <Icon name="ios-briefcase"  style={{ color: 'red' }} onPress={() => Actions.viewpatient()} />
                                 <Text>View Patient</Text>
                        </Button>
                        <Button>
                            <Icon active onPress={() => Actions.addPatient()} name='md-medkit' style={{ color: 'red' }} />
                                 <Text>Add Patient</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}

export default Home;