import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useSortableData from '../../useSortableData';
import Pagination from './Pagination';

export default function Table() {
    const users = useSelector(state => state.users);
    const [text, setText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const { items, requestSort } = useSortableData(users);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const TableHeader = () => {
        return (Object.keys(currentItems[0]).map(attr =>
            <th key={attr}>
                <button onClick={() => requestSort(attr)}>
                    {attr.toUpperCase()}
                </button>
            </th>
        ))
    }

    const TableRows = () => {
        return currentItems.filter((item) => {
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

            {currentItems.length > 0 ?
                <div>
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
                    <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
                </div>
                : <h1>
                    No data :(
                </h1>}
        </div>
    )
}
