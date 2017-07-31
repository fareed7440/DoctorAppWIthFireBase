//import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
import viewPatientRequst from '../actions/viewPatientAction'
import ViewPatient from '../component/viewPatient'
import searchRequst from '../actions/searchpatient'
function mapStateToProps(state) {
    console.log('state', state)
    return{
       view : state.ViewPatientReducer,
       searching : state.SearchPatientReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {

patient: (data) => dispatch(viewPatientRequst(data)),
searchByName : (name)=>dispatch(searchRequst(name)),
    }

}

const ViewPatientCon = connect(mapStateToProps, mapDispatchToProps)(ViewPatient)

export default ViewPatientCon;