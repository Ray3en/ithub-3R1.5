
const defaultState = []

// {id, title, image, price, count}

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const CHANGE_COUNT = 'CHANGE_COUNT'

function changeCountItem(array, id, count){
    return array.map(elem => {
        if (elem.id === id){
            elem.count += count
        }
        return elem
    })
}

export const cartReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_NEW_ITEM:
            let {id, title, image, price, count} = action.payload
            if (state.find(elem => elem.id === id)){
                return changeCountItem(state, id, count)
            } else {
                let new_item = {
                    id,
                    title,
                    image,
                    price,
                    count
                }
                return [...state, new_item]
            }
        case CHANGE_COUNT:
            let findItem = state.find(elem => elem.id === action.payload.id)
            if (action.payload.count === -1 && findItem.count === 1){
                return state.filter(elem => elem.id !== action.payload.id)
            } else {
                return changeCountItem(state, action.payload.id, action.payload.count)
            }
        default:
            return state
    }
}


export const addNEwItemAction = (payload) => ({type: ADD_NEW_ITEM, payload}) 
export const changeCountAction = (payload) => ({type: CHANGE_COUNT, payload}) 