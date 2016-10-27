export const addDropdown = (dropId: string, dropdown:any) => ({
    type: 'ADD_DROPDOWN',
    dropId,
    dropdown
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

export const addToSmartFrame = (elId:string, elType:string, props:any) => ({
    type: 'ADD_TO_SMARTFRAME',
    elId,
    elType,
    props
})