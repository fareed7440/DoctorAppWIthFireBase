//import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
import SearchByName from '../component/searchByName'
import searchRequst from '../actions/searchpatient'
function mapStateToProps(state) {
    console.log('state', state)
    return{
       searching : state.SearchPatientReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
searchByName : (name)=>dispatch(searchRequst(name)),
    }

}

const SearchCon = connect(mapStateToProps, mapDispatchToProps)(SearchByName)

export default SearchCon;