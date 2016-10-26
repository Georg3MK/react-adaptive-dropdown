import * as React from 'react';
import Select from '../containers/Select-semantic';

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
                            <Select id="italians"
                                    type="joint"
                                    changeDirection={changeDirection}>
                                <option>Alpha Romeo</option>
                                <option>Fiat</option>
                                <option>Lancia</option>
                                <option>Ferrari</option>
                                <option>Lamborghini</option>
                            </Select>
                        </td>
                        <td>
                            British
                        </td>
                        <td>
                            Russian
                        </td>
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
                        <td ref={'separate-japan'}>
                            Japans
                        </td>
                        <td ref={'separate-korean'}>
                            Koreans
                        </td>
                        <td>Empty</td>
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
                        <td>Empty</td>
                        <td>Empty</td>
                        <td>Empty</td>
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
                <Select id="japan"
                        type="separate"
                        changeDirection={changeDirection}>
                    <option>Toyota</option>
                    <option>Nissan</option>
                </Select>
                <Select id="korean"
                        type="separate"
                        changeDirection={changeDirection}>
                    <option>Kia</option>
                    <option>Hyundai</option>
                    <option>Great Wall</option>
                </Select>
            </div>
        )
    }

    componentDidMount() {
        function findPlace(refs: any, setPosition: any): void {
            let ref: string, id: string

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
                    id = ref.match(/\w+$/i)[0].toString()
                    setPosition(id, findOffset(refs[ref]))
                }
            }
        }

        console.log('setPos')
        findPlace(this.refs, this.props.setPosition)
    }
}

/*

* <Select id="russian"
 changeDirection={changeDirection} />

 <Select id="british"
 changeDirection={changeDirection} />
* */