import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, projectColumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";


const Datatable = ({ title }) => {
    const [data, setData] = useState([]);
    const [reducer, forceUpdate] = useReducer(x => x + 1, 0);
    let location = useLocation();



    useEffect(() => {
        // const fetchData = async () => {
        //     let list = [];
        //     try {
        //         const querySnapshot = await getDocs(collection(db, "users"));
        //         querySnapshot.forEach((doc) => {
        //             list.push({ id: doc.id, ...doc.data() });
        //         });
        //         setData(list);
        //     }
        //     catch (err) {
        //         console.log(err);
        //     }
        // };
        // fetchData();

        // Listen ( RealTime Data )

        const unsubUsers = onSnapshot(collection(db, "users"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            // console.log("Current data: ", doc.data());

        }, (error) => {
            console.log(error);
        });

        const unsubProjects = onSnapshot(collection(db, "projects"), (snapShot) => {
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
            if (location.pathname === "/users") {
                unsubUsers();

                console.log("hello worldd")
            }
            else if (location.pathname === "/projects") {
                unsubProjects();
            }
        }
    }, []);

    console.log(data);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "users", id));
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
            width: 200,
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



    if (location.pathname === "/users") {
        return (
            <div className="datatable" >
                <div className="datatableTitle">
                    {title}
                    <Link to="/users/new" className="link">
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        );
    }
    else {
        return (
            <div className="datatable">
                <div className="datatableTitle">
                    {title}
                    <Link to="/projects/new" className="link">
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={projectColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        );
    }


    // return (
    //     <div className="datatable">
    //         <div className="datatableTitle">
    //             {title}
    //             <Link to="/users/new" className="link">
    //                 Add New
    //             </Link>
    //         </div>
    //         <DataGrid
    //             className="datagrid"
    //             rows={data}
    //             columns={userColumns.concat(actionColumn)}
    //             pageSize={9}
    //             rowsPerPageOptions={[9]}
    //             checkboxSelection
    //         />
    //     </div>
    // );
};

export default Datatable;