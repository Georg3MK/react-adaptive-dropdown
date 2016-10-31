import * as React from 'react';

let DropdownSeparate = (props: any) => {

    const { id, items, defaultItem, visible } = props.dropdown
    const { setVisibility, setPosition, setDirection, changeDirection } = props

    return (
        <ul className={'dropdown ' + (visible ? 'open' : '')}
            onClick={
                    (e) => {
                        e.preventDefault()
                        let el:any = e.target,
                            top: number = el.offsetTop,
                            left: number = el.offsetLeft,
                            width: number = el.offsetWidth,
                            dropHeight = el.offsetHeight * (items.length + 1)

                        while (el.offsetParent !== document.body) {
                            el = el.offsetParent
                            top += el.offsetTop
                            left += el.offsetLeft
                        }

                        setPosition(id, {top: top, left: left, width: width})
                        setVisibility(id, (visible ? false : true))
                        changeDirection(id, top, dropHeight, setDirection)
                    }
                }>
            <li>{items[defaultItem]}</li>
        </ul>
    )
}

export default DropdownSeparate