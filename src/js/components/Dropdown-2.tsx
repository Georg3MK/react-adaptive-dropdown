import * as React from 'react';

export default class Dropdown extends React.Component<any, any> {

    render() {
        const { dropdown, clickItem } = this.props
        const id = dropdown.id,
            items = dropdown.items,
            currentItem = dropdown.defaultItem,
            direction = dropdown.dropDirection

        let itemCount = 0,
            liHeight = 2

        return (
            <label className="dropdown" ref={"dropdown"}>
                <input type="checkbox"/>
                <ul className="dropdown-list">
                    <li ref={"li"}>{items[currentItem]}</li>
                    {items.map((item: any) =>
                    <li key={item + itemCount++}
                        onClick={
                                    (function(id, item, click){
                                        return () => click(id, item)
                                    })(id, itemCount, clickItem)
                                }
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

    componentDidMount(){
        let elem: any = this.refs['li'],
            dropdownHeight: number = elem.offsetHeight * (this.props.dropdown.items.length + 1),
            timer: any = null

        function findOffset(elem: any, dropdownHeight:number) {

            let el = elem,
                offset = el.offsetTop
            while (el.offsetParent !== document.body) {
                el = el.offsetParent
                offset += el.offsetTop
                }

            offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

            if(offset >= dropdownHeight) { return 'bottom' }
            else { return 'top' }
        }

        window.addEventListener('resize',
            () => {
                if(timer) { clearTimeout(timer) }
                timer = setTimeout(
                    () => {
                        this.setState({direction: findOffset(this.refs['dropdown'], dropdownHeight)})
                    }
                    ,300)
            }
            ,false)

        this.setState({direction: findOffset(this.refs['dropdown'], dropdownHeight)})
    }
}