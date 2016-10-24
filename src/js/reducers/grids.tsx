const lists = [
    ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
    ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
    ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan'],
    ['volkswagen', 'golf', 'passat', 'phaeton', 'tiguan', 'tuareg'],
    ['skoda', 'fabia', 'octavia', 'superb', 'yeti', 'roomster'],
    ['BMW', '1-series', '3-series', '5-series', '7-series', 'X5']
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