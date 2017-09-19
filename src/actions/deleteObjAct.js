import ActionType from './Actiontype';
import {Actions} from 'react-native-router-flux';
import * as DB from '../firebase/firebase'

function deleteObject(delObj){
console.log('data', delObj)
return dispatch =>{
    dispatch(DeleteObj());
     DB.database.ref(`/patientRecords/patient/`+delObj).remove( function(err){
if(err){
    alert(err)
}
else{
    console.log('deleted')
}
     })
}
}

function DeleteObj(){
    return{
        type : ActionType.DELETE_OBJECT
    }
}
function DeleteObjSuccess(){
    return{
        type : ActionType.DELETE_OBJECT_SUCCESS,
        data
    }
}

export default deleteObject;