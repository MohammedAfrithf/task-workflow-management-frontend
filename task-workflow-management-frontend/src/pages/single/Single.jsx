import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table"

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://dp.profilepics.in/dp/2022/anime-dp/anime-dp-for-whatsapp-61.jpg"
                                alt="dp"
                                className='itemImg'
                            />
                            <div className="details">
                                <h1 className="itemTitle">Ibrahim HZ</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">ibrahim@dmc.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Mail: </span>
                                    <span className="itemValue">ibrahimhz@dmc.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">xyz.. 23/4 colron</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 3 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Single
