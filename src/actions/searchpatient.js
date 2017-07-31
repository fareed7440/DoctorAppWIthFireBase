import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import * as DB from '../firebase/firebase'
//import axios from 'axios'
function searchRequst(data) { 
    const arr = []
    var res = data.toLowerCase();
    console.log('dataaaaaa', res)
     return dispatch => {
        dispatch(searchPatientRequest());
return DB.database.ref('/patientRecords/patient/').orderByChild('name').equalTo(res).on('value', (snap)=>{
     let name = snap.val()
     if(name ===null){
         alert('This name is not in the List')
     }
    console.log('alldata' , name)
    arr.push(name)
    dispatch(searchPatientRequestSuccess(arr));

})   }

 
 

    }
  

function searchPatientRequest() {
    return {
        type: ActionType.SEARCH_PATIENT
    }
}
function searchPatientRequestSuccess(data) {
    return {
        type: ActionType.SEARCH_PATIENTSUCCESS,
        data
    }
}

export default searchRequst;