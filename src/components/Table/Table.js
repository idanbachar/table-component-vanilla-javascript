import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Table() {

    const users = useSelector(state => state.users);
    const [text, setText] = useState('');

    const TableHeader = () => {
        return (Object.keys(users[0]).map(attr =>
            <th key={attr}>
                {attr.toUpperCase()}
            </th>
        ))
    }

    const TableRows = () => {
        return users.filter((user) => {
            const stringifyRow = JSON.stringify(user);
            if (text === "") return user;
            if (stringifyRow.toLowerCase().includes(text.toLowerCase()))
                return user;
        }).map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.userId}</td>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
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

            <h2>
                {text}
            </h2>
            {users.length > 0 ?
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
