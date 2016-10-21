const lists = [
    ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
    ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
    ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan']
]

const dropdown = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            return {
                id: action.id,
                type: action.type,
                items: action.items,
                defaultItem: action.defaultItem
            }
        default:
            return state
    }
}

const grids = (state:any = {lists}, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            return [
                Object.assign({}, state, {
                    dropDirection: action.direction
                })
            ]
        default:
            return state
    }
}

export default grids