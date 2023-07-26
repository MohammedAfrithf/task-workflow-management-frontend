import React from 'react';
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type={"user"} />
                    <Widgets type={"order"} />
                    <Widgets type={"balance"} />
                    <Widgets type={"earnings"} />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Last 6 month Revenue" />
                </div>
                <div className="listContainer">
                    <div className="listTitle"><p>Latest Assigned Tasks</p></div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home