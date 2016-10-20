import * as React from 'react';

export default class DropdownSeparate extends React.Component<any, any> {
    constructor(props: any, context: any ){
        super(props, context)
        this.state = {
            currentItem: props.items[0]
        }
    }

    render() {
        const { items, pos } = this.props
        let itemCount = 0,
            liHeight = 2

        return (
            <label className="dropdown-separate"
                   ref={"dropdown"}
                   style={
                       (pos) ? {top: pos.top, left: pos.left} : {}
                   }>
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

    componentDidMount() {
        let elem: any = this.refs['li'],
            dropdownHeight: number = elem.offsetHeight * (this.props.items.length + 1),
            timer: any = null

        function findOffset(offset: number, dropdownHeight:number) {
            offset = document.documentElement.clientHeight - (offset - window.pageYOffset)

            if(offset >= dropdownHeight) { return 'bottom' }
            else { return 'top' }
        }

        window.addEventListener('resize',
            () => {
                if(timer) { clearTimeout(timer) }
                timer = setTimeout(
                    () => {
                        this.setState({direction: findOffset(this.props.pos.top, dropdownHeight)})
                    }
                    ,300)
            }
        ,false)

        let onLoad = setInterval(
            () => {
                if(this.props.pos) {
                    this.setState({direction: findOffset(this.props.pos.top, dropdownHeight)})
                    clearInterval(onLoad)
                }
            }
            ,100)
    }
}