const actions = {
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
                                console.log(offset, el, el.offsetParent)
                                elOffset = el.offsetParent
                            }
                        }
                        el = el.parentNode.offsetHeight
                        offset = el - offset
                        console.log(el, dropHeight, offset, toElem)
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

const grids = (state:any = {actions}, action: any) => {
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