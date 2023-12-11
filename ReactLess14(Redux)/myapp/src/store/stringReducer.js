
const defaultState = 'default string'

const UPPER_CASE = 'UPPER_CASE'
const LOWER_CASE = 'LOWER_CASE'
const INICT_CAP = 'INICT_CAP'
const NEW_STRING = 'NEW_STRING'

export const stringReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPPER_CASE:
            return state.toUpperCase()
        case LOWER_CASE:
            return state.toLowerCase()
        case INICT_CAP:
            let to_array = state.split(' ')
            let result = to_array.map( elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase())
            return result.join(' ')
        case NEW_STRING:
            return action.payload
        default:
            return state
    }
}

export const upperCaseAction = () => ({type: UPPER_CASE})
export const lowerCaseAction = () => ({type: LOWER_CASE})
export const initCapAction = () => ({type: INICT_CAP})
export const newStringAction = (payload) => ({type: NEW_STRING, payload})