import { combineReducers } from 'redux';
import AddPatientReducer from  './patientReducer'
import ViewPatientReducer from './viewpatient'
import SearchPatientReducer from './searchReducer'
import SearchDateReducer from './searchDateReducer'
import DeleteReducer from './deleteObjReducer'
const indexReducers = combineReducers(
    {
    AddPatientReducer,
    ViewPatientReducer,
    SearchPatientReducer,
    SearchDateReducer, 
    DeleteReducer
    }
);
export default indexReducers;