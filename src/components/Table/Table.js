import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useSortableData from '../../useSortableData';
import Pagination from './pagination/Pagination';
import './table.css'

export default function Table({ data }) {

    const [searchFilter, setSearchFilter] = useState('');
    const [searchFunctionality, setSearchFunctionality] = useState("live");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const { items, requestSort } = useSortableData(data);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const dispatch = useDispatch();

    const TableHeader = () => {
        return (Object.keys(currentItems[0]).map(attr =>
            <th key={attr}>
                <button onClick={() => requestSort(attr)}>
                    {attr.toUpperCase()}
                </button>
            </th>
        ))
    }

    const liveSearchFilter = () => {
        if (searchFunctionality === 'live') {
            return currentItems.filter((item) => {
                const stringifyRow = JSON.stringify(item);
                if (searchFilter === "") return item;
                if (stringifyRow.toLowerCase().includes(searchFilter.toLowerCase()))
                    return item;
            })
        }
        return currentItems;
    }
    const TableRows = () => {
        return liveSearchFilter().map(item => {
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

    const tryFetchApiData = () => {
        dispatch({
            type: 'GET',
            payload: searchFilter
        })
    }

    const ApiButtonFilter = () => {
        return (
            <button onClick={tryFetchApiData}>
                Fetch api
            </button>
        )
    }

    return (
        <div>
            {searchFunctionality !== 'live' ?
                <p style={{ color: 'red' }}>
                    (To use fetch, write the route you want.
                    <br />
                    for exam: the default parameter is <b>posts</b>.
                    <br />
                    You can try 'albums' / 'todos'
                    )
                </p>
                : null}

            Search:
            <input type="text"
                onChange={(e) => setSearchFilter(e.target.value)}
            />
            <select onChange={(e) => setSearchFunctionality(e.target.value)}>
                <option value="live">Live filtering</option>
                <option value="api">api filtering</option>
            </select>

            {searchFunctionality !== 'live' ?
                <ApiButtonFilter />
                : null}

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
                    No data received :(
                </h1>}
            <h3>Current page: {`${currentPage}/${items.length / itemsPerPage}`}</h3>
            <h3>{itemsPerPage} items displayed each page</h3>
            <h3>Max amount of items available: {items.length}</h3>
        </div>
    )
}
