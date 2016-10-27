const defaultDropdowns = [
    {
        id: 'british',
        type: 'joint',
        items: ['Rover', 'MINI', 'Land Rover', 'Aston Martin', 'Rolls Royce', 'Bentley'],
        defaultItem: 1
    },{
        id: 'russian',
        type: 'joint',
        items: ['Lada', 'KAMAZ', 'UAZ', 'T-90'],
        defaultItem: 0
    },{
        id: 'german',
        type: 'separate',
        items: ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Opel'],
        defaultItem: 0
    }
]

const dropdown = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            state.push(action.dropdown)
            return state

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
        case 'SET_DROPDOWN_POSITION':
            if(state.id === action.dropId) {
                return Object.assign({}, state, {
                    position: action.position
                })
            }
            else { return state }
        default:
            return state
    }
}

const dropdowns = (state:any = defaultDropdowns, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':{
            return dropdown(state, action)
        }
        default:
            return state.map(
                (dd:any) => dropdown(dd, action)
            )
    }
}

export default dropdowns