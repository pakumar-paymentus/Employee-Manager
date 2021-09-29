import { useRowSelect, useTable } from "react-table";
import COLUMNS from "./columns";
import { useMemo } from "react";
import users from './data.json'

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => users, []);
    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
        } = tableInstance;
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=> {
                    prepareRow(row)
                    return(
                        <tr {...getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}

                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BasicTable;