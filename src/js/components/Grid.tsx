import * as React from 'react';
import DropdownSimple from './Dropdown';
import Dropdown from './Dropdown-2';
import DropdownSeparate from './Dropdown-3';

export default class Grid extends React.Component<any, any> {
    constructor(props:any, context:any) {
        super(props, context)
        this.state = {
            separates:{}
        }
    }

    render() {
        let list1 = ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
            list2 = ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
            list3 = ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan'],
            separateCount = 0

        return (
            <div>
                <table className="grid">
                    <thead>
                    <tr>
                        <th>Adaptive grid dropdown</th>
                        <th>Adaptive overflow dropdown</th>
                        <th>Adaptive overflow dropdown (separate component)</th>
                        <th>Original Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {<DropdownSimple items={list1}/>}
                        </td>
                        <td>
                            {<Dropdown items={list1}/>}
                        </td>
                        <td ref={'separate-' + separateCount++}>Empty</td>
                        <td>
                            <select>
                                <option>volkswagen</option>
                                <option>skoda</option>
                                <option>toyota</option>
                                <option>volvo</option>
                                <option>ford</option>
                                <option>nissan</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {<DropdownSimple items={list2}/>}
                        </td>
                        <td>
                            {<Dropdown items={list2}/>}
                        </td>
                        <td ref={'separate-' + separateCount++}></td>
                        <td>
                            <select>
                                <option>audi</option>
                                <option>BMW</option>
                                <option>mercedes</option>
                                <option>lexus</option>
                                <option>infinity</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {<DropdownSimple items={list3}/>}
                        </td>
                        <td>
                            {<Dropdown items={list3}/>}
                        </td>
                        <td ref={'separate-' + separateCount++}></td>
                        <td>
                            <select>
                                <option>lamborghini</option>
                                <option>ferrari</option>
                                <option>porsche with no brakes</option>
                                <option>aston martin</option>
                                <option>maserati</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <DropdownSeparate items={list1} pos={this.state.separates['separate-0']}/>
                <DropdownSeparate items={list2} pos={this.state.separates['separate-1']}/>
                <DropdownSeparate items={list3} pos={this.state.separates['separate-2']}/>
            </div>
        )
    }

    componentDidMount() {
        function findPlace(refs: any) {
            let elems: any = {}, ref: string

            function findOffset(el: any) {
                let offsetTop: number = el.offsetTop,
                    offsetLeft: number = el.offsetLeft
                while (el.offsetParent !== document.body) {
                    el = el.offsetParent
                    offsetTop += el.offsetTop
                    offsetLeft += el.offsetLeft
                }
                return {
                    top: offsetTop,
                    left: offsetLeft
                }
            }

            for (ref in refs) {
                if (refs.hasOwnProperty(ref) && ref.toString().match(/^separate/i)) {
                    elems[ref] = findOffset(refs[ref])
                }
            }
            return elems
        }

        this.setState({
            separates: findPlace(this.refs)
        })
        this.forceUpdate()
    }
}