const drops = [
        {
            id: 'british',
            items: ['Rover', 'MINI', 'Land Rover', 'Aston Martin', 'Rolls Royce', 'Bentley'],
            defaultItem: 1
        },{
            id: 'russian',
            items: ['Lada', 'KAMAZ', 'UAZ', 'T-90'],
            defaultItem: 0
        },{
            id: 'german',
            items: ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Opel'],
            defaultItem: 0
        }
    ],
    actions = {
        changeDirection:(
            id: number,
            elem: any,
            toElem: string,
            offset: number,
            dropHeight: number,
            setDirection: any
        ) => {

            let timer: any = null

            function findOffset(elem: any, dropHeight: number, offset: any, toElem: string) {

                if(elem) {
                    var el = elem, offset

                    if(toElem) {
                        var elOffset = el,
                            offset = elOffset.offsetTop

                        while (!el.parentNode.classList.contains(toElem)) {
                            el = el.parentNode
                            if(el.offsetParent !== elOffset) {
                                offset += el.offsetTop
                                elOffset = el.offsetParent
                            }
                        }
                        el = el.parentNode.offsetHeight
                        offset = el - offset
                    }
                    else {
                        offset = el.offsetTop
                        while (el.offsetParent !== document.body) {
                            el = el.offsetParent
                            offset += el.offsetTop
                        }
                        offset = document.documentElement.clientHeight - (offset - window.pageYOffset)
                    }
                }
                else {
                    offset = document.documentElement.clientHeight - (offset - window.pageYOffset)
                }

                if(offset >= dropHeight) { return 'bottom' }
                else { return 'top' }
            }

            window.addEventListener('resize',
                () => {
                    if(timer) { clearTimeout(timer) }
                    timer = setTimeout(
                        () => {
                            setDirection(id, findOffset(elem, dropHeight, offset, toElem))
                        }
                        ,300)
                },false)

            setDirection(id, findOffset(elem, dropHeight, offset, toElem))
        }
    }

const dropdown = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            let drop:any = action.dropdown,
                dropUpdated: boolean = false

            console.log(state.drops)

            if(state.drops.length){
                state.drops = state.drops.map(
                    function(el:any) {
                        if(el.id === drop.id) {
                            dropUpdated = true
                            return drop
                        }
                        else { return el }
                    })
            }
            if(!dropUpdated){ state.drops.push(drop) }
            return state

        case 'ADD_TO_SMARTFRAME':
            let elem:any = action.smartElem,
                updated: boolean = false

            if(state.smartFrame.length){
                state.smartFrame = state.smartFrame.map(
                    function(el:any) {
                        if(el.id === elem.id) {
                            updated = true
                            return elem
                        }
                        else { return el }
                    })
            }
            if(!updated){ state.smartFrame.push(elem) }
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

const dropdowns = (state:any = {drops, actions, smartFrame:[]}, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':{
            return Object.assign(
                {},
                dropdown(state, action)
            )
        }
        case 'ADD_TO_SMARTFRAME':{
            return Object.assign(
                {},
                dropdown(state, action)
            )
        }
        default:
            return Object.assign({}, {
                drops:state.drops.map((dd:any) => dropdown(dd, action)),
                smartFrame: state.smartFrame,
                actions: state.actions
            })
    }
}

export default dropdowns