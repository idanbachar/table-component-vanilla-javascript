import React from 'react'
import { useSelector } from 'react-redux'

export default function Table() {

    const users = useSelector(state => state.users);

    const TableHeader = () => {
        return (Object.keys(users[0]).map(attr =>
            <th key={attr}>
                {attr.toUpperCase()}
            </th>
        ))
    }

    const TableRows = () => {
        return users.map(user => {
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
            {users.length > 0 ?
                <table >
                    <thead>
                        <tr>
                            <TableHeader />
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows />
                    </tbody>
                </table>
                : null}
        </div>
    )
}
