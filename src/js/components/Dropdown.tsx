import * as React from 'react';

let DropdownSeparate = (props: any) => {
    
    if(props.dropdown.position) {
        const { onItemClick, setVisibility } = props
        const {id, items, position, dropDirection, visible} = props.dropdown

        let itemCount = 0,
            liHeight = 2

        return (
                <ul className={'dropdown-separate ' + (visible ? 'open' : '')}
                    style={{top: position.top, left: position.left, width: position.width}}
                    onClick={
                        (e) => {
                            e.preventDefault()
                            setVisibility(id, false)
                        }
                    }>
                    {items.map((item: any) =>
                        <li onClick={
                                (function(id, item, click){
                                    return (e: any) => {
                                        e.preventDefault()
                                        click(id, item)
                                    }
                                })(id, itemCount, onItemClick)
                            }
                            style={(dropDirection === 'top') ?
                                {bottom: liHeight * itemCount + 2 + 'em'} :
                                {top: liHeight * itemCount + 'em'}}
                            key={item + itemCount++}>
                            {item}
                        </li>)}
                </ul>
        )
    }
    else { return null }
}

export default DropdownSeparate