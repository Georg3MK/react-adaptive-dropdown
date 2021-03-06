export const addDropdown = (dropId: string, dropdown:any) => ({
    type: 'ADD_DROPDOWN',
    dropId,
    dropdown
})

export const addToSmartFrame = (smartElem: any) => ({
    type: 'ADD_TO_SMARTFRAME',
    smartElem
})

export const setValue = (dropId:number, valueId:number) => ({
    type: 'SET_DROPDOWN_VALUE',
    dropId,
    valueId
})

export const setPosition = (dropId:number, position:any) => ({
    type: 'SET_DROPDOWN_POSITION',
    dropId,
    position
})

export const setDropDirection = (dropId:number, direction:string) => ({
    type: 'SET_DROPDOWN_DIRECTION',
    dropId,
    direction
})

export const setVisibility = (dropId:number, visible:boolean) => ({
    type: 'SET_DROPDOWN_VISIBILITY',
    dropId,
    visible
})