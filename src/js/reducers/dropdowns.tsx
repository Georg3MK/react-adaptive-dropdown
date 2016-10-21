const defaultDropdowns = [
    {
        id: 0,
        items: ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
        defaultItem: 0
    },{
        id: 1,
        items: ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
        defaultItem: 0
    },{
        id: 2,
        items: ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan'],
        defaultItem: 0
    }
]

const dropdown = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            return {
                id: action.id,
                items: action.items,
                defaultItem: action.defaultItem,
                dropDirection: action.dropDirection
            }
        case 'SET_DROPDOWN_VALUE':
            if(state.id === action.dropId) {
                return Object.assign({}, state, {
                    defaultItem: action.valueId
                })
            }
            else { return state }
        case 'SET_DROPDOWN_DIRECTION':
            if(state.id === action.dropId) {
                return Object.assign({}, state, {
                    dropDirection: action.direction
                })
            }
            else { return state }
        default:
            return state
    }
}

const dropdowns = (state = defaultDropdowns, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            return [
                ...state,
                dropdown(undefined, action)
            ]
        case 'SET_DROPDOWN_VALUE':{
            return state.map(
                dd => dropdown(dd, action)
            )
        }
        case 'SET_DROPDOWN_DIRECTION':{
            return state.map(
                dd => dropdown(dd, action)
            )
        }
        default:
            return state
    }
}

export default dropdowns