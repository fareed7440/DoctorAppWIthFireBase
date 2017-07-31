import ActionType from '../actions/Actiontype'


const initialState = {};
function SearchDateReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.SEARCH_BY_DATE_SUCCESS:
   return {... state ,date:action.data}
 
         default: return state
    }
}
export default SearchDateReducer;