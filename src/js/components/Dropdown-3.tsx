import * as React from 'react';

let DropdownSeparate = (props: any) => {

    if(props.dropdown.position) {
        const { dropdown, clickItem, setDirection, changeDirection } = props
        const id = dropdown.id,
            items = dropdown.items,
            currentItem = dropdown.defaultItem,
            pos = dropdown.position,
            direction = dropdown.dropDirection

        let itemCount = 0,
            liHeight = 2

        return (
                <ul className="dropdown-separate"
                    style={{top: pos.top, left: pos.left}}
                    onClick={
                        (e) => {
                            e.preventDefault()
                            let offset: any = pos.top,
                                el: any = e.target,
                                dropHeight = el.offsetHeight * (items.length + 2)   // because of first li and 2em margin-top

                            if(el.classList.contains('dropdown-separate')) { el.classList.toggle('open') }
                            else { el.parentNode.classList.toggle('open') }

                            changeDirection(id, null, null, offset, dropHeight, setDirection)
                        }
                    }>
                    <li>{items[currentItem]}</li>
                    {items.map((item: any) =>
                        <li onClick={
                                (function(id, item, click){
                                    return () => click(id, item)
                                })(id, itemCount, clickItem)
                            }
                            key={item + itemCount++}
                            style={(direction === 'top') ?
                                {bottom: liHeight * itemCount + 'em'} :
                                {top: liHeight * itemCount + 'em'}}>
                            {item}
                        </li>)}
                </ul>
        )
    }
    else { return null }
}

export default DropdownSeparate