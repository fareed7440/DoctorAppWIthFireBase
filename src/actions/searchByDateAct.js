import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import * as DB from '../firebase/firebase'
//import axios from 'axios'
function searchDateRequst(data) { 
    const arr = []
    console.log('dataaaaaa', data)
     return dispatch => {
        dispatch(searchByDateRequest());
return DB.database.ref('/patientRecords/patient/').orderByChild('date').equalTo(data).on('value', (snap)=>{
     let date = snap.val()
     if(date ===null){
         alert('There is no record in this date')
     }
    console.log('alldata' , date)
    arr.push(date)
    dispatch(searchByDateRequestSuccess(arr));

})   }

 
 

    }
  

function searchByDateRequest() {
    return {
        type: ActionType.SEARCH_BY_DATE
    }
}
function searchByDateRequestSuccess(data) {
    return {
        type: ActionType.SEARCH_BY_DATE_SUCCESS,
        data
    }
}

export default searchDateRequst;