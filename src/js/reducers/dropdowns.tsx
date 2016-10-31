const actions = {
        changeDirection:(
            id: number,
            offset: number,
            dropHeight: number,
            setDirection: any
        ) => {

            let timer: any = null

            function findOffset(dropHeight: number, offset: any) {
                
                offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

                if(offset >= dropHeight) { return 'bottom' }
                else { return 'top' }
            }

            window.addEventListener('resize',
                () => {
                    if(timer) { clearTimeout(timer) }
                    timer = setTimeout(
                        () => {
                            setDirection(id, findOffset(dropHeight, offset))
                        }
                        ,300)
                },false)

            setDirection(id, findOffset(dropHeight, offset))
        }
    }

const dropdown = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_DROPDOWN':
            let drop:any = action.dropdown,
                dropUpdated: boolean = false

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

        case 'SET_DROPDOWN_VISIBILITY':
            if(state.id === action.dropId) {
                return Object.assign({}, state, {
                    visible: action.visible
                })
            }
            else { return state }
        default:
            return state
    }
}

const dropdowns = (state:any = {drops:[], actions, smartFrame:[]}, action: any) => {
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