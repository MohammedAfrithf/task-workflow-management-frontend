export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "address",
        headerName: "Address",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];


export const projectColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "project_pic",
        headerName: "Logo",
        width: 150,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="productavatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "projectname",
        headerName: "Project Name",
        width: 200,
    },

    {
        field: "project_leader",
        headerName: "Leader",
        width: 200,
    },
    {
        field: "project_completion_percentage",
        headerName: "Percentage",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.stock}`}>
                    {params.row.stock}
                </div>
            );
        },
    },

];





export const taskColumns = [
    { field: "id", headerName: "ID", width: 80 },
    {
        field: "taskname",
        headerName: "Name",
        width: 200,
    },
    {
        field: "task_in_project",
        headerName: "Project",
        width: 150,
    },
    {
        field: "task_due_date",
        headerName: "Due",
        width: 150,
    },
    {
        field: "task_priority",
        headerName: "Priority",
        width: 90,
    },
    {
        field: "task_completion_percentage",
        headerName: "Percentage",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.stock}`}>
                    {params.row.stock}
                </div>
            );
        },
    },
    {
        field: "task_asignee",
        headerName: "Asignee",
        width: 150,
    },
];

//temporary data
// export const userRows = [
//     {
//         id: 1,
//         username: "Snow",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         status: "active",
//         email: "1snow@gmail.com",
//         age: 35,
//     },
//     {
//         id: 2,
//         username: "Jamie Lannister",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "2snow@gmail.com",
//         status: "passive",
//         age: 42,
//     },
//     {
//         id: 3,
//         username: "Lannister",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "3snow@gmail.com",
//         status: "pending",
//         age: 45,
//     },
//     {
//         id: 4,
//         username: "Stark",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "4snow@gmail.com",
//         status: "active",
//         age: 16,
//     },
//     {
//         id: 5,
//         username: "Targaryen",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "5snow@gmail.com",
//         status: "passive",
//         age: 22,
//     },
//     {
//         id: 6,
//         username: "Melisandre",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "6snow@gmail.com",
//         status: "active",
//         age: 15,
//     },
//     {
//         id: 7,
//         username: "Clifford",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "7snow@gmail.com",
//         status: "passive",
//         age: 44,
//     },
//     {
//         id: 8,
//         username: "Frances",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "8snow@gmail.com",
//         status: "active",
//         age: 36,
//     },
//     {
//         id: 9,
//         username: "Roxie",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "snow@gmail.com",
//         status: "pending",
//         age: 65,
//     },
//     {
//         id: 10,
//         username: "Roxie",
//         img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//         email: "snow@gmail.com",
//         status: "active",
//         age: 65,
//     },
// ];
