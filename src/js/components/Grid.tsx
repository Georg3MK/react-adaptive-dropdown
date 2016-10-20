import * as React from 'react';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown-2';

let Grid = (props: any) => {
    const {} = props
    let list1 = ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
        list2 = ['audi', 'BMW', 'mercedes', 'lexus', 'infinity'],
        list3 = ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan']

    return (
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
                        {<Dropdown items={list1} />}
                    </td>
                    <td>
                        {<Dropdown2 items={list1} />}
                    </td>
                    <td>Empty</td>
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
                        {<Dropdown items={list2} />}
                    </td>
                    <td>
                        {<Dropdown2 items={list2} />}
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
                    <td>
                        {<Dropdown items={list3} />}
                    </td>
                    <td>{<Dropdown2 items={list3} />}</td>
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
    );
}

export default Grid