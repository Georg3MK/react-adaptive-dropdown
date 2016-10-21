let nextDrop = 0

export const addDropdown = (dropdown:any) => ({
    type: 'ADD_DROPDOWN',
    id: nextDrop++,
    dropdown
})

export const setValue = (dropId:number, valueId:number) => ({
    type: 'SET_DROPDOWN_VALUE',
    dropId,
    valueId
})

export const setDropDirection = (dropId:number, direction:string) => ({
    type: 'SET_DROPDOWN_DIRECTION',
    dropId,
    direction
})
