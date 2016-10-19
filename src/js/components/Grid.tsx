import * as React from 'react';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown-2';

let Grid = (props: any) => {
    const {} = props
    let list1 = ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
        list2 = ['audi', 'BMW', 'Mercedes', 'Lexus', 'Infinity'],
        list3 = ['volkswagen', 'skoda', 'toyota', 'volvo', 'ford', 'nissan']

    return (
        <table className="grid">
            <thead>
                <tr>
                    <th>State 1</th>
                    <th>Adaptive overflow dropdown</th>
                    <th>State 3</th>
                    <th>State 4</th>
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
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        {<Dropdown2 items={list2} />}
                    </td>
                    <td>3</td>
                    <td>
                        {<Dropdown items={list1} />}
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{<Dropdown2 items={list3} />}</td>
                    <td>
                        {<Dropdown items={list1} />}
                    </td>
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