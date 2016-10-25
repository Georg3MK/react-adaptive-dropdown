import * as React from 'react';
import DropdownBox from '../containers/DropdownBox';

export default class Grid extends React.Component<any, any> {

    render() {
        const {changeDirection} = this.props

        return (
            <div>
                <h2>Grid-2: updated</h2>
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
                            {<DropdownBox id={1}
                                             type="simple"
                                             changeDirection={changeDirection}/>}
                        </td>
                        <td>
                            {<DropdownBox id={3}
                                          type="joint"
                                          changeDirection={changeDirection}/>}
                        </td>
                        <td ref={'separate-0'}>Empty</td>
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
                            {<DropdownBox id={2}
                                          type="simple"
                                          changeDirection={changeDirection}/>}
                        </td>
                        <td>
                            {<DropdownBox id={4}
                                          type="joint"
                                          changeDirection={changeDirection} />}
                        </td>
                        <td ref={'separate-1'}>Empty</td>
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
                            {<DropdownBox id={0}
                                          type="simple"
                                          changeDirection={changeDirection}/>}
                        </td>
                        <td>
                            {<DropdownBox id={5}
                                          type="joint"
                                          changeDirection={changeDirection} />}
                        </td>
                        <td ref={'separate-2'}>Empty</td>
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
                <DropdownBox id={0} type="separate" changeDirection={changeDirection} />
                <DropdownBox id={1} type="separate" changeDirection={changeDirection} />
                <DropdownBox id={2} type="separate" changeDirection={changeDirection} />
            </div>
        )
    }

    componentDidMount() {
        function findPlace(refs: any, setPosition: any): void {
            let ref: string, id: number

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
                    id = Number(ref.match(/\d+$/)[0])
                    setPosition(id, findOffset(refs[ref]))
                }
            }
        }

        findPlace(this.refs, this.props.setPosition)
    }
}