import React,{Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './component/home'
import PatientCon from './container/addPatient'
import ViewPatientCon from './container/viewpatient'
import SearchCon from './container/search'
import SearchDateCon from './container/searchByDateCon'

class Routing extends Component{
    render(){
        return(
            <Router  titleStyle={{alignSelf:'center',}}> 

<Scene key = "home">
       <Scene key="home" component={Home} hideNavBar = {true} />
         <Scene key="addPatient" component={PatientCon} title = 'Add Patient Detail' hideNavBar = {false} />
           <Scene key="viewpatient" component={ViewPatientCon} title = 'View Patient Detail'  hideNavBar = {true} />
              <Scene key="search" component={SearchCon} title = 'Patient Detail' hideNavBar = {false} />
                <Scene key="searchByDateCon" component={SearchDateCon} title = 'Patient Detail' hideNavBar = {false} />
            </Scene>


            </Router>

        )
    }
}



export default Routing;