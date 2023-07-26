import "./widgets.scss";
import React, { useEffect, useState } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { collection, query, where, getDocs } from "firebase/firestore"
import InventoryIcon from '@mui/icons-material/Inventory';
import { db } from "../../firebase"

const Widgets = ({ type, projectData }) => {
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;

    //temporary
    // let amount = 100;
    // let diff = 20; 

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: (<PersonOutlineOutlinedIcon className="icon" style={{
                    backgroundColor: "pink",
                }} />)
            };
            break;

        case "order":
            data = {
                title: "PROJECTS",
                isMoney: false,
                link: "View all Projects",
                icon: (<InventoryIcon className="icon" style={{
                    backgroundColor: "gold",
                }} />)
            };
            break;

        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon: (<CurrencyRupeeIcon className="icon" style={{
                    backgroundColor: "lightGreen",
                }} />)
            };
            break;
        case "balance":
            data = {
                title: "AVAILABLE TASKS",
                isMoney: false,
                link: "See Available Tasks",
                icon: (<EventBusyOutlinedIcon className="icon" style={{
                    backgroundColor: "lightBlue",
                }} />)
            };
            break;
        case "project_card":
            data = {
                title: projectData,
                isMoney: false,
                link: "View Details",
                icon: (<InventoryIcon className="icon" style={{
                    backgroundColor: "lightBlue",
                }} />)
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

            const lastMonthQuery = query(
                collection(db, "users"),
                where("timeStamp", "<=", today),
                where("timestamp", ">", lastMonth)
            );
            const prevMonthQuery = query(
                collection(db, "users"),
                where("timeStamp", "<=", lastMonth),
                where("timestamp", ">", prevMonth)
            );
            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length);
            setDiff(
                ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100
            );
        };
        fetchData();
    }, []);

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "₹"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets