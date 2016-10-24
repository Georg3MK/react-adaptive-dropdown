import * as React from 'react';

export default class DropdownSeparate extends React.Component<any, any> {
    render() {
        if(this.props.dropdown.position) {
            const { dropdown, clickItem, setDirection } = this.props
            const id = dropdown.id,
                items = dropdown.items,
                currentItem = dropdown.defaultItem,
                pos = dropdown.position,
                direction = dropdown.dropDirection

            let itemCount = 0,
                liHeight = 2

            return (
                <label className="dropdown-separate"
                       ref={"dropdown"}
                       style={{top: pos.top, left: pos.left}}
                       onClick={
                       () => {
                           let offset: any = pos.top,
                               elem: any = this.refs['dropdown'],
                               dropHeight = elem.offsetHeight * (items.length + 2)   // because of first li and 2em margin-top
                           setDirection(id, null, offset, dropHeight)
                       }
                   }>
                    <input type="checkbox"/>

                    <ul className="dropdown-list">
                        <li ref={"li"}>{items[currentItem]}</li>
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
                </label>
            )
        }
        else { return null }
    }
}