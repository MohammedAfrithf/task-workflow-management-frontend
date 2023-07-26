import React from 'react';
import "./taskboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useReducer, useState } from "react";
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Table from '../../components/table/Table';
import { Link } from 'react-router-dom';
import { taskColumns } from "../../datatablesource";

function TaskBoard({ title }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubTasks = onSnapshot(collection(db, "tasks"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            // console.log("Current data: ", doc.data());

        }, (error) => {
            console.log(error);
        });

        return () => {
            unsubTasks();
        }
    }, []);

    console.log(data);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "task", id));
            setData(data.filter((item) => item.id !== id));
        }
        catch (err) {
            console.log(err);
        }

    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="taskboard">
            <Sidebar />
            <div className="taskboardContainer">
                <Navbar />
                <div className="datatable" >
                    <div className="datatableTitle">
                        {title}
                        <Link to="/tasks/new" className="link">
                            Add New
                        </Link>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={taskColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    )
}

export default TaskBoard
