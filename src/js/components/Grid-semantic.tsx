import * as React from 'react';
import Select from '../containers/Select-semantic';

let Grid = () => {
    return (
        <div>
            <h2>Grid-2: updated</h2>
            <table className="grid">
                <thead>
                <tr>
                    <th>Adaptive dropdown</th>
                    <th>Adaptive dropdown</th>
                    <th>Adaptive dropdown</th>
                    <th>Original Select</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Select id="italian">
                            <option>Audi</option>
                            <option>BMW</option>
                            <option>Mercedes</option>
                            <option>VW</option>
                            <option>Opel</option>
                        </Select>
                    </td>
                    <td>Empty</td>
                    <td>Empty</td>
                    <td>Empty</td>
                </tr>
                <tr>
                    <td>
                        <Select id="japan">
                            <option>Toyota</option>
                            <option>Lexus</option>
                            <option>Nissan</option>
                            <option>Honda</option>
                            <option>Acura</option>
                        </Select>
                    </td>
                    <td>Empty</td>
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
        </div>
    )
}

export default Grid