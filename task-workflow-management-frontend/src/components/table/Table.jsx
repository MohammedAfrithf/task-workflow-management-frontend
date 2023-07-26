import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1143155,
            taskname: "Nerdcentra",
            img: "https://picsum.photos/200",
            projectname: "John Smith",
            date: "1 March",
            duedate: "10 March",
            asignee: "Raj",
            status: "Approved",
        },
        {
            id: 2243153,
            taskname: "Update the Logo",
            img: "https://picsum.photos/200",
            projectname: "Micro Blocs",
            date: "20 June",
            duedate: "30 June",
            asignee: "Raj",
            status: "Pending",
        },
        {
            id: 2353943,
            taskname: "Describe Edge Cases",
            img: "https://picsum.photos/200",
            projectname: "Qubenetics",
            date: "15 Febrauary",
            duedate: "20 Febrauary",
            asignee: "Raj",
            status: "Approved",
        },
        {
            id: 1143155,
            taskname: "Merge the Branch",
            img: "https://picsum.photos/200",
            projectname: "Dockrizenn",
            date: "25 April",
            duedate: "30 April",
            asignee: "Raj",
            status: "Pending",
        },
    ];

    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Task ID</TableCell>
                        <TableCell className='tableCell'>Task Name</TableCell>
                        <TableCell className='tableCell'>Project Name</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Due Date</TableCell>
                        <TableCell className='tableCell'>Asignee</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell className='tableCell'>
                                {row.id}
                            </TableCell>
                            <TableCell className='tableCell'>{row.taskname}</TableCell>
                            <TableCell className='tableCell'>{row.projectname}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.duedate}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className='image' />
                                    {row.asignee}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default List;
