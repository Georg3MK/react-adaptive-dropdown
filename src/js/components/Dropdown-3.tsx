import * as React from 'react';

export default class DropdownSeparate extends React.Component<any, any> {
    render() {
        if(this.props.dropdown.position) {
            const { dropdown, clickItem } = this.props
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
                       style={{top: pos.top, left: pos.left}}>
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

    findOffset(offset: number, dropdownHeight:number) {
        offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

        if(offset >= dropdownHeight) { return 'bottom' }
        else { return 'top' }
    }
    
    componentDidUpdate() {
        if(!this.props.dropdown.dropDirection) {
            const items = this.props.dropdown.items,
                id = this.props.dropdown.id,
                top = this.props.dropdown.position.top,
                setDirection = this.props.setDirection,
                elem: any = this.refs['li']

            let dropdownHeight: number = elem.offsetHeight * (items.length + 1),
                timer: any = null

            window.addEventListener('resize',
                () => {
                    if(timer) { clearTimeout(timer) }
                    timer = setTimeout(
                        () => {
                            setDirection(id, this.findOffset(top, dropdownHeight))
                        }
                        ,300)
                }
                ,false)
            setDirection(id, this.findOffset(top, dropdownHeight))
        }
    }
}