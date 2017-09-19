import ActionType from '../actions/Actiontype'


const initialState = {};
function DeleteReducer(state = initialState, action) {
    switch (action.type) {
  case ActionType.DELETE_OBJECT_SUCCESS:
   return {... state ,deleteobj:action.data}
 
         default: return state
    }
}
export default DeleteReducer;