const defaultDropdowns = [
    {
        id: 0,
        type: 'separated',
        items: ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
        defaultItem: 0
    },{
        id: 1,
        type: 'separated',
        items: ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
        defaultItem: 0
    },{
        id: 2,
        type: 'separated',
        items: ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan'],
        defaultItem: 0
    },{
        id: 3,
        type: 'joint',
        items: ['volkswagen', 'golf', 'passat', 'phaeton', 'tiguan', 'tuareg'],
        defaultItem: 0
    },{
        id: 4,
        type: 'joint',
        items: ['skoda', 'fabia', 'octavia', 'superb', 'yeti'],
        defaultItem: 0
    },{
        id: 5,
        type: 'joint',
        items: ['BMW', '1-series', '3-series', '5-series', '7-series', 'X5'],
        defaultItem: 0
    }
]

const dropdown = (state: any, action: any) => {
    switch (action.type) {
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

const dropdowns = (state = defaultDropdowns, action: any) => {
    switch (action.type) {
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
        case 'SET_DROPDOWN_POSITION':{
            return state.map(
                dd => dropdown(dd, action)
            )
        }
        default:
            return state
    }
}

export default dropdowns