import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useSortableData from '../../useSortableData';

export default function Table() {
    const users = useSelector(state => state.users);
    const [text, setText] = useState('');

    const { items, requestSort } = useSortableData(users);

    const TableHeader = () => {
        return (Object.keys(items[0]).map(attr =>
            <th key={attr}>
                <button onClick={() => requestSort(attr)}>
                    {attr.toUpperCase()}
                </button>
            </th>
        ))
    }

    const TableRows = () => {
        return items.filter((item) => {
            const stringifyRow = JSON.stringify(item);
            if (text === "") return item;
            if (stringifyRow.toLowerCase().includes(text.toLowerCase()))
                return item;
        }).map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            Search:
            <input type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <select>
                <option>Live filtering</option>
                <option>api filtering</option>
            </select>

            {items.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <TableHeader />
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows />
                    </tbody>
                </table>
                : <h1>
                    No data :(
                </h1>}
        </div>
    )
}
