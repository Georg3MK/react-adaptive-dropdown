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
            <label className="dropdown" ref={"dropdown"}>
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
            dropdownHeight: number = elem.offsetHeight * (this.props.items.length + 1),
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