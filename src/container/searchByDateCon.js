//import AddPatient from '../component/addPatient'
import { connect } from 'react-redux'
import SearchByDate from '../component/searchByDate'
import searchDateRequst from '../actions/searchByDateAct'
function mapStateToProps(state) {
    console.log('state', state)
    return{
       SearchDate : state.SearchDateReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
searchdate : (name)=>dispatch(searchDateRequst(name)),
    }

}

const SearchDateCon = connect(mapStateToProps, mapDispatchToProps)(SearchByDate)

export default SearchDateCon;