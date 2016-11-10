import * as React from 'react';

let DropdownSeparate = (props: any) => {

    const { id, items, defaultItem, visible } = props.dropdown
    const { dropdown, setVisibility, setPosition, setDirection, changeDirection } = props

    return (
        <ul className={'dropdown ' + (visible ? 'open' : '')}
            onClick={
                    (e) => {
                        e.preventDefault()
                        let el:any = e.target,
                            dropHeight = el.offsetHeight * (items.length + 1)

                        setVisibility(id, (visible ? false : true))
                        if(!dropdown.dropDirection) {
                            changeDirection(id, el, dropHeight, setDirection, setPosition)
                        }
                    }
                }>
            <li>{items[defaultItem]}</li>
        </ul>
    )
}

export default DropdownSeparate