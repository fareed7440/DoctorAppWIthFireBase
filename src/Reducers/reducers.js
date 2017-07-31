import { combineReducers } from 'redux';
import AddPatientReducer from  './patientReducer'
import ViewPatientReducer from './viewpatient'
import SearchPatientReducer from './searchReducer'
import SearchDateReducer from './searchDateReducer'
const indexReducers = combineReducers(
    {
    AddPatientReducer,
    ViewPatientReducer,
    SearchPatientReducer,
    SearchDateReducer
    }
);
export default indexReducers;