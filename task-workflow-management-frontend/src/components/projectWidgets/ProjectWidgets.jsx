import "./projectWidgets.scss";
import React, { useEffect, useState } from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import { collection, query, where, getDocs } from "firebase/firestore"
import InventoryIcon from '@mui/icons-material/Inventory';
import { db } from "../../firebase"

function ProjectWidgets(data) {

    data = {
        title: data.projectname,
        isMoney: false,
        link: "View Details",
        icon: (<InventoryIcon className="icon" style={{
            backgroundColor: "lightBlue",
        }} />)
    };


    return (
        <>
            <div className="widget">
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">
                        {data.isMoney && "₹"} { }
                    </span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpOutlinedIcon />
                        { } %
                    </div>
                    {data.icon}
                </div>
            </div>
        </>
    )
}

export default ProjectWidgets

// Object.values(data).length

