import * as React from 'react';

export default class Dropdown extends React.Component<any, any> {

    render() {
        const { dropdown, clickItem, setDirection } = this.props
        const id = dropdown.id,
            items = dropdown.items,
            currentItem = dropdown.defaultItem,
            direction = dropdown.dropDirection

        let itemCount = 0,
            liHeight = 2

        return (
            <label className="dropdown"
                   ref={"dropdown"}
                   onClick={
                       () => {
                           let el: any = this.refs['dropdown'],
                               dropHeight = el.offsetHeight * (items.length + 1)
                           setDirection(id, el, null, dropHeight)
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
                        style={
                            (direction === 'top') ?
                                {bottom: liHeight * itemCount + 'em'} :
                                {top: liHeight * itemCount + 'em'}
                        }>
                        {item}
                    </li>)}
                </ul>
            </label>
        )
    }
}