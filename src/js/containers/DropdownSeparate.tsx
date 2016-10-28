import * as React from 'react';

let DropdownSeparate = (props: any) => {

    if(props.dropdown.position) {
        const { id, items, defaultItem, position } = props.dropdown
        
        return (
            <ul className="dropdown-separate"
                style={{top: position.top, left: position.left}}
                onClick={
                        (e) => {
                            e.preventDefault()
                            props.addToSmartFrame({id:id, type:'dropdown'})
                        }
                    }>
                <li>{items[defaultItem]}</li>
            </ul>
        )
    }
    else { return null }
}

export default DropdownSeparate