import * as React from 'react';

export default class Dropdown extends React.Component<any, any> {
    constructor(props: any, context: any ){
        super(props, context)
        this.state = {
            currentItem: props.items[0]
        }
    }

    render() {
        const { items } = this.props
        let itemCount = 0,
            liHeight = 2

        return (
            <label className="dropdown-separate" ref={"dropdown"}>
                <input type="checkbox"/>
                <ul className="dropdown-list">
                    <li ref={"li"}>{this.state.currentItem}</li>
                    {items.map((item: any) =>
                        <li key={item + itemCount++}
                            onClick={
                                () => {this.setState({currentItem: item})}
                            }
                            style={
                            (this.state.direction === 'top') ?
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
            dropdownHeight: number = elem.offsetHeight * (this.props.items.length + 1)

        function findOffset(fromElement: any, toElement:string, dropdownHeight:number) {
            let el = fromElement,
                elOffset = fromElement,
                offset = elOffset.offsetTop

            while (!el.parentNode.classList.contains(toElement)) {
                el = el.parentNode
                if(el.offsetParent !== elOffset) {
                    offset += el.offsetTop
                    elOffset = el.offsetParent
                }
            }
            el = el.parentNode.offsetHeight
            offset = el - offset

            if(offset >= dropdownHeight) { return 'bottom' }
            else { return 'top' }
        }

        this.setState({direction: findOffset(this.refs['dropdown'], 'grid', dropdownHeight)})
    }
}