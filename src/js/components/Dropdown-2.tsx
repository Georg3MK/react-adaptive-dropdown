import * as React from 'react';

let Dropdown = (props: any) => {

    const { dropdown, clickItem, setDirection, changeDirection } = props
    const id = dropdown.id,
        items = dropdown.items,
        currentItem = dropdown.defaultItem,
        direction = dropdown.dropDirection

    let itemCount = 0,
        liHeight = 2

    return (
        <ul className="dropdown"
            onClick={
               (e) => {
                   e.preventDefault()
                   let el: any = e.target,
                       dropHeight = el.offsetHeight * (items.length + 1)

                   if(el.classList.contains('dropdown')) { el.classList.toggle('open') }
                   else { el.parentNode.classList.toggle('open') }

                   changeDirection(id, el, null, null, dropHeight, setDirection)
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
                style={
                    (direction === 'top') ?
                        {bottom: liHeight * itemCount + 'em'} :
                        {top: liHeight * itemCount + 'em'}
                }>
                {item}
            </li>)}
        </ul>
    )
}

export default Dropdown