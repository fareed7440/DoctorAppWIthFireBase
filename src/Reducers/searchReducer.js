import ActionType from '../actions/Actiontype'


const initialState = {};
function SearchPatientReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.SEARCH_PATIENTSUCCESS:
   return {... state ,search:action.data}
 
         default: return state
    }
}
export default SearchPatientReducer;