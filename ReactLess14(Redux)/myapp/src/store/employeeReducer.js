
const defaultState = {}

const GET_ASYNC_EMPL = 'GET_ASYNC_EMPL'

export const employeeReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_ASYNC_EMPL:
            return action.payload
        default:
            return state
    }
}


export const getAsyncEmplAction = (payload) => ({type: GET_ASYNC_EMPL, payload})