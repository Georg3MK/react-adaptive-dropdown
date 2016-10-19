import * as React from 'react';
import Dropdown from './Dropdown';

let Grid = (props: any) => {
    const {} = props
    let list1 = ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'],
        list2 = ['audi', 'BMW', 'Mercedes', 'Lexus', 'Infinity']

    return (
        <div className="grid">
            <table>
                <thead>
                    <tr>
                        <th>State 1</th>
                        <th>State 2</th>
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
                            {<Dropdown items={list2} />}
                        </td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>
                            {<Dropdown items={list1} />}
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>
                            {<Dropdown items={list2} />}
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
        </div>
    );
}

export default Grid