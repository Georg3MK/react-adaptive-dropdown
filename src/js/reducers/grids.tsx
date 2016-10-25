const lists = [
    ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
    ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
    ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan'],
    ['volkswagen', 'golf', 'passat', 'phaeton', 'tiguan', 'tuareg'],
    ['skoda', 'fabia', 'octavia', 'superb', 'yeti', 'roomster'],
    ['BMW', '1-series', '3-series', '5-series', '7-series', 'X5']
],
    actions = {
        changeDirection:(
            id: number,
            elem: any,
            offset: number,
            dropHeight: number,
            setDirection: any
        ) => {
            let timer: any = null

            function findOffset(elem: any, dropHeight: number, offset: any) {
                if(elem) {
                    var el = elem,
                        offset = el.offsetTop

                    while (el.offsetParent !== document.body) {
                        el = el.offsetParent
                        offset += el.offsetTop
                    }
                }

                offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

                if(offset >= dropHeight) { return 'bottom' }
                else { return 'top' }
            }

            window.addEventListener('resize',
                () => {
                    if(timer) { clearTimeout(timer) }
                    timer = setTimeout(
                        () => {
                            setDirection(id, findOffset(elem, dropHeight, offset))
                        }
                        ,300)
                },false)

            setDirection(id, findOffset(elem, dropHeight, offset))
        }
    }

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

const grids = (state:any = {lists, actions}, action: any) => {
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