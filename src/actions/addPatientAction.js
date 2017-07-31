import ActionType from './Actiontype';
import { Actions } from 'react-native-router-flux';
import * as DB from '../firebase/firebase'
//import axios from 'axios'
function addPatientRequst(data) {
    console.log('dataaaaaa', data)
    return dispatch => {
        dispatch(PatientRequest());
        return DB.database.ref('/patientRecords/patient').push(data, function (err) {
            console.log('data', data)
            if (err) {
                throw err
            } else {
                dispatch(PatientRequestSuccess(data));
                alert('Detail Submited successfully')
                Actions.home()


            }

        })

    }




}


function PatientRequest() {
    return {
        type: ActionType.ADD_PATEINT
    }
}
function PatientRequestSuccess(data) {
    return {
        type: ActionType.ADD_PATEINTSUCCESS,
        data
    }
}

export default addPatientRequst;