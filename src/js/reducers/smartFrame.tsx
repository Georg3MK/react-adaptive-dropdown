const smartFrame = (state:any = [], action: any) => {
    switch (action.type) {
        case 'ADD_TO_SMARTFRAME':
            let elem: any = {
                id: action.elId,
                type: action.elType,
                props: action.props
            },
                updated: boolean = false

            if(state.length){
                state = state.map(
                    function(el:any) {
                        if(el.id === elem.id) {
                            updated = true
                            return elem
                        }
                        else { return el }
                    })
            }
            if(!updated){ state.push(elem) }
            return state
        default:
            return state
    }
}

export default smartFrame