import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import * as DB from '../firebase/firebase'
//import axios from 'axios'
function viewPatientRequst() {
     return dispatch => {
         const arr = [];
        dispatch(viewPatient());
return DB.database.ref('patientRecords/patient').on('value' , (snap)=>{
    let AllData = snap.val()
    console.log('alldata' , AllData)
    arr.push(AllData)
    dispatch(viewPatientRequestSuccess(arr));

})
      
       

    

     }
  
 
 

    }
  

function viewPatient() {
    return {
        type: ActionType.VIEW_PATEINT
    }
}
function viewPatientRequestSuccess(data) {
    return {
        type: ActionType.VIEW_PATEINTSUCCESS,
        data
    }
}

export default viewPatientRequst;